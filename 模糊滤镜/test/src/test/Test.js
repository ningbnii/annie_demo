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
    s.shape.drawRect(100,100,100,100);
    s.shape.endFill();
    s.addChild(s.shape);

    var filters = [new annie.BlurFilter(5,5,3)];
    s.shape.filters = filters;

};

