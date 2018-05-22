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
    s.x0 = 100;
    s.y0 = 200;
    s.x1 = 0;
    s.y1 = 0;
    s.x2 = 300;
    s.y2 = 200;

    s.shape = new annie.Shape();
    s.addChild(s.shape);

    s.shape.beginStroke('#000000', 1);
    s.shape.moveTo(s.x0, s.y0);
    s.shape.quadraticCurveTo(s.x1, s.y1, s.x2, s.y2);
    s.shape.endStroke();

    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, s.onMouseMove.bind(this));
};

test.Test.prototype.onMouseMove = function (e) {
    var s = this;
    s.x1 = e.localX;
    s.y1 = e.localY;
    s.shape.clear();
    s.shape.beginStroke('#000000', 1);
    s.shape.moveTo(s.x0, s.y0);
    s.shape.quadraticCurveTo(s.x1, s.y1, s.x2, s.y2);
    s.shape.endStroke();
};



