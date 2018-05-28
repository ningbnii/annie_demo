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
    var _d0 = new test.backgroundLayer();
    _d0.name = "backgroundLayer";
    s.backgroundLayer = _d0;
    s.addChild(_d0);
    //f2x_auto_created_init_end

};
test.Test.prototype.init = function () {
    var s = this;

    s.ball = new test.Ball();
    s.addChild(s.ball);
    s.easing = 0.2;
    s.targetX = 320;
    s.targetY = 568;
    s.moveStatus = true;

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
    s.ball.addEventListener(annie.MouseEvent.MOUSE_DOWN, s.onMouseDown.bind(this));
    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, s.onMouseMove.bind(this));
    s.ball.addEventListener(annie.MouseEvent.MOUSE_UP, s.onMouseUp.bind(this));
};

test.Test.prototype.onEnterFrame = function () {
    var s = this;

    if (s.moveStatus) {
        var dx = s.targetX - s.ball.x;
        var dy = s.targetY - s.ball.y;
        var distance = Math.sqrt(dx*dx+dy*dy);
        // 结束
        if(distance<1){
            s.ball.x = s.targetX;
            s.ball.y = s.targetY;
        }else{
            var vx = dx * s.easing;
            var vy = dy * s.easing;
            s.ball.x += vx;
            s.ball.y += vy;
        }
    }

};

test.Test.prototype.onMouseDown = function (e) {
    var s = this;
    s.moveStatus = false;

};

test.Test.prototype.onMouseUp = function (e) {
    var s = this;
    s.moveStatus = true;
};

test.Test.prototype.onMouseMove = function (e) {
    var s = this;

    if (s.moveStatus == false) {

        s.ball.x = e.localX;
        s.ball.y = e.localY;
    }
};


