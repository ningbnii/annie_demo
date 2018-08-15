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
    s.stageWidth = 640;
    s.stageHeight = 1136;

    s.ball = new test.Ball();
    s.ball.x = s.stageWidth / 2;
    s.ball.y = s.stageHeight / 2;
    s.addChild(s.ball);

    s.shape = new annie.Shape();
    s.addChild(s.shape);

    s.addEventListener(annie.MouseEvent.CLICK, function (e) {
        var data = s.stage.renderObj.rootContainer.getContext('2d').getImageData(s.ball.x - s.ball.width / 2, s.ball.y - s.ball.height / 2, s.ball.x + s.ball.width / 2, s.ball.height / 2).data;
        trace(data);
    })

};























