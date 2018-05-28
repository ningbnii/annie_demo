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
    s.left = 0;
    s.right = 640;
    s.top = 0;
    s.bottom = 1136;
    s.bounce = -0.7;

    s.ball = new test.Ball();
    s.addChild(s.ball);
    s.ball.x = 320;
    s.ball.y = 568;

    s.vx = Math.random() * 10 - 5;
    s.vy = Math.random() * 10 - 5;

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
};

test.Test.prototype.onEnterFrame = function () {
    var s = this;
    s.ball.x += s.vx;
    s.ball.y += s.vy;

    if (s.ball.x + s.ball.radius > s.right) {
        s.ball.x = s.right - s.ball.radius;
        s.vx *= s.bounce;
    }
    if (s.ball.x - s.ball.radius < s.left) {
        s.ball.x = s.left + s.ball.radius;
        s.vx *= s.bounce;
    }
    if (s.ball.y + s.ball.radius > s.bottom) {
        s.ball.y = s.bottom - s.ball.radius;
        s.vy *= s.bounce;
    }
    if (s.ball.y - s.ball.radius < s.top) {
        s.ball.y = s.top + s.ball.radius;
        s.vy *= s.bounce;
    }

};



