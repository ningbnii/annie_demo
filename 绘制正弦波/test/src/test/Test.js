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
    s.angle = 0;
    s.centerY = 568;
    s.range = 50;
    s.xspeed = 1;
    s.yspeed = 0.05;
    s.xpos = 0;
    s.ypos = 0;
    s.tempx = 0;
    s.tempy = s.centerY;

    s.shape = new annie.Shape();
    s.addChild(s.shape);


    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
};


test.Test.prototype.onEnterFrame = function (e) {
    var s = this;
    s.shape.beginStroke('#000000', 1);
    s.shape.moveTo(s.tempx, s.tempy);
    s.xpos += s.xspeed;
    s.angle += s.yspeed;
    s.ypos = s.centerY + Math.sin(s.angle) * s.range;
    s.shape.lineTo(s.xpos, s.ypos);
    s.shape.endStroke();
    s.tempx = s.xpos;
    s.tempy = s.ypos;
};