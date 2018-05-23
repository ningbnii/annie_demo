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

    s.shape = new annie.Shape();
    s.shape.beginFill('#ffff00');
    s.shape.drawRect(-50, -50, 100, 100);
    s.shape.endFill();

    s.shape.x = 200;
    s.shape.y = 200;
    s.addChild(s.shape);

    s.filter = new annie.ShadowFilter('#000000', 0, 3, 3);
    s.shape.filters = [s.filter];
    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, s.onMouseMove.bind(this));
};

test.Test.prototype.onMouseMove = function (e) {
    var s = this;
    var dx = e.localX - s.shape.x;
    var dy = e.localY - s.shape.y;

    s.filter.blur = Math.sqrt(dx * dx + dy * dy) / 10;

};

