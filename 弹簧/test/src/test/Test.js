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

    s.ball = new test.Ball(20);
    s.ball.x = 320;
    s.ball.y = 568;
    s.addChild(s.ball);
    s.spring = 0.1;
    s.friction = 0.95;
    s.springLength = 100;
    s.mouseX = 320;
    s.mouseY = 568;
    s.shape = new annie.Shape();
    s.addChild(s.shape);

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, function (e) {
        s.mouseX = e.localX;
        s.mouseY = e.localY;
    }.bind(this));
};

test.Test.prototype.onEnterFrame = function () {
    var s = this;
    var dx = s.ball.x - s.mouseX;
    var dy = s.ball.y - s.mouseY;
    var angle = Math.atan2(dy, dx);
    var targetX = s.mouseX + Math.cos(angle) * s.springLength;
    var targetY = s.mouseY + Math.sin(angle) * s.springLength;
    s.ball.vx += (targetX - s.ball.x) * s.spring;
    s.ball.vy += (targetY - s.ball.y) * s.spring;
    s.ball.vx *= s.friction;
    s.ball.vy *= s.friction;
    s.ball.x += s.ball.vx;
    s.ball.y += s.ball.vy;

    s.shape.clear();
    s.shape.beginStroke('#000000',10);
    s.shape.moveTo(s.ball.x,s.ball.y);
    s.shape.lineTo(s.mouseX,s.mouseY);
    s.shape.endStroke();

};










