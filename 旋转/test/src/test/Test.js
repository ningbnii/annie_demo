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
    s.numBalls = 10;
    s.var = 0.05;
    s.mouseX = 0;
    s.mouseY = 0;

    for (var i = 0; i < s.numBalls; i++) {
        var ball = new test.Ball();
        s.addChild(ball);
        s.balls.push(ball);
        ball.x = Math.random() * 640;
        ball.y = Math.random() * 1136;

    }

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, function (e) {
        s.mouseX = e.localX;
        s.mouseY = e.localY;
    }.bind(this));

};

test.Test.prototype.onEnterFrame = function () {
    var s = this;

    var angle = (s.mouseX - 320) * 0.001;
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    for (var i = 0; i < s.numBalls; i++) {
        var ball = s.balls[i];
        var x1 = ball.x - 320;
        var y1 = ball.y - 568;
        var x2 = cos * x1 - sin * y1;
        var y2 = cos * y1 + sin * x1;
        ball.x = 320 + x2;
        ball.y = 568 + y2;
    }

};












