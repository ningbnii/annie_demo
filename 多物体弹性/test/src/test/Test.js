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

    s.ball0 = s.createBall();
    s.ball1 = s.createBall();
    s.ball2 = s.createBall();

    s.spring = 0.1;
    s.friction = 0.95;
    s.springLength = 100;

    s.shape = new annie.Shape();
    s.addChild(s.shape);

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));

};

test.Test.prototype.onEnterFrame = function () {
    var s = this;
    s.springTo(s.ball0, s.ball1);
    s.springTo(s.ball0, s.ball2);
    s.springTo(s.ball1, s.ball0);
    s.springTo(s.ball1, s.ball2);
    s.springTo(s.ball2, s.ball0);
    s.springTo(s.ball2, s.ball1);

    s.shape.clear();
    s.shape.beginStroke('#000000', 1);
    s.shape.moveTo(s.ball0.x, s.ball0.y);
    s.shape.lineTo(s.ball1.x, s.ball1.y);
    s.shape.lineTo(s.ball2.x, s.ball2.y);
    s.shape.lineTo(s.ball0.x, s.ball0.y);
    s.shape.endStroke();
};

test.Test.prototype.createBall = function () {
    var s = this;
    var ball = new test.Ball(20);
    ball.x = Math.random() * 640;
    ball.y = Math.random() * 1136;
    s.addChild(ball);
    return ball;
};

test.Test.prototype.springTo = function (ballA, ballB) {
    var s = this;
    var dx = ballB.x - ballA.x;
    var dy = ballB.y - ballA.y;
    var angle = Math.atan2(dy, dx);
    var targetX = ballB.x - Math.cos(angle) * s.springLength;
    var targetY = ballB.y - Math.sin(angle) * s.springLength;
    ballA.vx += (targetX - ballA.x) * s.spring;
    ballA.vy += (targetY - ballA.y) * s.spring;
    ballA.vx *= s.friction;
    ballA.vy *= s.friction;
    ballA.x += ballA.vx;
    ballA.y += ballA.vy;
};










