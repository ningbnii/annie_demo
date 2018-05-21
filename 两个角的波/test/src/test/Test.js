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

    //f2x_auto_created_init_end

};
test.Test.prototype.init = function () {
    var s = this;
    s.angleX = 0;
    s.angleY = 0;
    s.centerX = 320;
    s.centerY = 568;
    s.range = 50;
    s.xspeed = 0.07;
    s.yspeed = 0.11;

    s.ball = new test.Ball();

    s.addChild(s.ball);
    s.ball.x = 0;
    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));

};


test.Test.prototype.onEnterFrame = function (e) {
    var s = this;
    s.ball.x = s.centerX + Math.sin(s.angleX) * s.range;
    s.ball.y = s.centerY + Math.sin(s.angleY) * s.range;
    s.angleX += s.xspeed;
    s.angleY += s.yspeed;
};