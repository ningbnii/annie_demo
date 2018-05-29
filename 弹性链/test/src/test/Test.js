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
    s.balls = [];
    s.numBalls = 5;

    for (var i = 0; i < s.numBalls; i++) {
        var ball = new test.Ball(20);
        s.addChild(ball);
        s.balls.push(ball);
    }

    s.spring = 0.1;
    s.friction = 0.8;
    s.gravity = 5;

    s.targetX = 320;
    s.targetY = 568;

    s.shape = new annie.Shape();
    s.addChild(s.shape);

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, function (e) {
        s.targetX = e.localX;
        s.targetY = e.localY;

    })
};

test.Test.prototype.onEnterFrame = function () {
    var s = this;

    s.shape.clear();
    s.shape.beginStroke('#000000', 1);
    s.shape.moveTo(s.targetX, s.targetY);
    s.shape.lineTo(s.balls[0].x, s.balls[0].y);
    s.moveBall(s.balls[0], s.targetX, s.targetY);

    for (var i = 1; i < s.numBalls; i++) {
        var ballA = s.balls[i - 1];
        var ballB = s.balls[i];
        s.moveBall(ballB, ballA.x, ballA.y);
        s.shape.lineTo(ballB.x, ballB.y);
    }

    s.shape.endStroke();

};

test.Test.prototype.moveBall = function (ball, targetX, targetY) {
    var s = this;
    ball.vx += (targetX - ball.x) * s.spring;
    ball.vy += (targetY - ball.y) * s.spring;
    ball.vy += s.gravity;
    ball.vx *= s.friction;
    ball.vy *= s.friction;
    ball.x += ball.vx;
    ball.y += ball.vy;
};




