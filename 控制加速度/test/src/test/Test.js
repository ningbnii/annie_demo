var test = test || {};
test.Test = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    s.init();
};
F2xExtend(test.Test, F2xContainer);
test.Test.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
    var _d1 = new test.move();
    _d1.name = "move";
    s.move = _d1;
    Flash2x.d(_d1, {x: 106.5, y: 1034.75});
    var _d0 = new test.backgroundLayer();
    _d0.name = "backgroundLayer";
    s.backgroundLayer = _d0;
    s.addChild(_d0);
    s.addChild(_d1);
    //f2x_auto_created_init_end

};
test.Test.prototype.init = function () {
    var s = this;

    s.vx = 0;
    s.ax = 0;
    s.vy = 0;
    s.ay = 0;
    // 小球的半径
    s.radius = 40;

    s.ball = new test.Ball(s.radius,'#000000');
    s.addChild(s.ball);
    s.ball.x = 320;
    s.ball.y = 568;
    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));

    s.move.left.addEventListener(annie.MouseEvent.MOUSE_DOWN, s.onMoveLeft.bind(this));
    s.move.left.addEventListener(annie.MouseEvent.MOUSE_UP, s.onMouseUp.bind(this));
    s.move.right.addEventListener(annie.MouseEvent.MOUSE_DOWN, s.onMoveRight.bind(this));
    s.move.right.addEventListener(annie.MouseEvent.MOUSE_UP, s.onMouseUp.bind(this));
    s.move.up.addEventListener(annie.MouseEvent.MOUSE_DOWN, s.onMoveUp.bind(this));
    s.move.up.addEventListener(annie.MouseEvent.MOUSE_UP, s.onMouseUp.bind(this));
    s.move.down.addEventListener(annie.MouseEvent.MOUSE_DOWN, s.onMoveDown.bind(this));
    s.move.down.addEventListener(annie.MouseEvent.MOUSE_UP, s.onMouseUp.bind(this));
};

test.Test.prototype.onMoveUp = function (e) {
    var s = this;
    s.ay = -0.2;
};

test.Test.prototype.onMoveDown = function (e) {
    var s = this;
    s.ay = 0.2;
};

test.Test.prototype.onMouseUp = function (e) {
    var s = this;
    s.ax = 0;
    s.ay = 0;
};

test.Test.prototype.onMoveLeft = function (e) {
    var s = this;
    s.ax = -0.2;
};

test.Test.prototype.onMoveRight = function (e) {
    var s = this;
    s.ax = 0.2;
};

test.Test.prototype.onEnterFrame = function (e) {
    var s = this;
    if (s.vy<0 && s.ball.y + s.radius / 2 < 0) {
        s.ball.y = 1136 + s.radius / 2;
    }
    if (s.vy>0 && s.ball.y - s.radius / 2 > 1136) {
        s.ball.y = 0 - s.radius / 2;
    }
    if (s.vx<0 && s.ball.x + s.radius / 2 < 0) {
        s.ball.x = 640 + s.radius / 2;
    }
    if(s.vx>0 && s.ball.x - s.radius/2>640){
        s.ball.x = 0 - s.radius/2;
    }
    s.vx += s.ax;
    s.ball.x += s.vx;
    s.vy += s.ay;
    s.ball.y += s.vy;
};



