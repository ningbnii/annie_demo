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
    s.vr = 5;

    s.centerX = 320;
    s.centerY = 568;
    s.arrow = new test.Arrow();
    s.arrow.x = s.centerX;
    s.arrow.y = s.centerY;
    s.addChild(s.arrow);

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
};


test.Test.prototype.onEnterFrame = function () {
    var s = this;
    s.arrow.rotation += s.vr;
};




