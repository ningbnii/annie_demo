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
    Flash2x.d(_d1, {x: 89.5, y: 1045.35});
    var _d0 = new test.backgroundLayer();
    _d0.name = "backgroundLayer";
    s.backgroundLayer = _d0;
    s.addChild(_d0);
    s.addChild(_d1);
    //f2x_auto_created_init_end

};
test.Test.prototype.init = function () {
    var s = this;
    s.vr = 0;
    s.thrust = 0;
    s.vx = 0;
    s.vy = 0;

    s.shape = new test.Ship();
    s.addChild(s.shape);
    s.shape.x = 320;
    s.shape.y = 568;

    s.move.left.addEventListener(annie.MouseEvent.MOUSE_DOWN, s.onMoveLeft.bind(this));
    s.move.right.addEventListener(annie.MouseEvent.MOUSE_DOWN, s.onMoveRight.bind(this));
    s.move.addEventListener(annie.MouseEvent.MOUSE_UP, s.onMouseUp.bind(this));
    s.move.up.addEventListener(annie.MouseEvent.MOUSE_DOWN, s.onThrust.bind(this));
    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
};

test.Test.prototype.onEnterFrame = function (e) {
    var s = this;

    s.shape.rotation += s.vr;
    var angle = s.shape.rotation * Math.PI / 180;
    var ax = Math.cos(angle) * s.thrust;
    var ay = Math.sin(angle) * s.thrust;
    s.vx += ax;
    s.vy += ay;
    s.shape.x += s.vx;
    s.shape.y += s.vy;
};

test.Test.prototype.onMoveLeft = function (e) {
    var s = this;
    s.vr = -5;
};

test.Test.prototype.onMoveRight = function () {
    var s = this;
    s.vr = 5;
};

test.Test.prototype.onMouseUp = function () {
    var s = this;
    s.vr = 0;
    s.thrust = 0;
    s.shape.changeShowFlame(false);
};

test.Test.prototype.onThrust = function () {
    var s = this;
    s.thrust = 0.2;
    s.shape.changeShowFlame(true);
};
