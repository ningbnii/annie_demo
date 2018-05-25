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

    s.count = 100;
    s.gravity = 0.5;
    s.balls = [];
    s.filter = new annie.ShadowFilter('#000000', 0, 3, 3);
    for (var i = 0; i < s.count; i++) {
        var ball = new test.Ball(2, '#' + Math.random().toString(16).substr(-6));
        ball.x = 320;
        ball.y = 1136;
        ball.vx = Math.random() * 2 - 1;
        ball.vy = Math.random() * -10 - 10;
        ball.filters = [s.filter];
        s.addChild(ball);
        s.balls.push(ball);
    }

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
};

test.Test.prototype.onEnterFrame = function () {
    var s = this;
    for (var i = 0; i < s.balls.length; i++) {
        var ball = s.balls[i];
        ball.vy += s.gravity;
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.x - ball.radius > 640 || ball.x + ball.radius < 0 || ball.y - ball.radius > 1136 || ball.y + ball.radius < 0) {
            ball.x = 320;
            ball.y = 1136;
            ball.vx = Math.random() * 2 - 1;
            ball.vy = Math.random() * -10 - 10;
        }
    }
};



