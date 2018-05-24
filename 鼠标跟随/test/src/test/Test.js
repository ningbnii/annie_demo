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
    s.speed = 5;
    s.tempx = 0;
    s.tempy = 0;
    s.centerX = 320;
    s.centerY = 568;
    s.arrow = new test.Arrow();
    s.arrow.x = s.centerX;
    s.arrow.y = s.centerY;
    s.addChild(s.arrow);

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, s.onMouseMove.bind(this));
};

test.Test.prototype.onMouseMove = function (e) {
    var s = this;
    s.tempx = e.localX;
    s.tempy = e.localY;
};

test.Test.prototype.onEnterFrame = function () {
    var s = this;

    var dx = s.tempx - s.arrow.x;
    var dy = s.tempy - s.arrow.y;
    var angle = Math.atan2(dy, dx);
    s.arrow.rotation = angle * 180 / Math.PI;
    var vx = Math.cos(angle) * s.speed;
    var vy = Math.sin(angle) * s.speed;
    s.arrow.x += vx;
    s.arrow.y += vy;
};




