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

    s.numPoints = 9;
    s.shape = new annie.Shape();
    s.addChild(s.shape);
    // 建立由随机点构成的一个数组
    s.points = new Array();
    for (var i = 0; i < s.numPoints; i++) {
        var tempx = Math.random() * 640;
        var tempy = Math.random() * 1136;
        s.points[i] = {
            x: tempx,
            y: tempy
        };
        // 绘制点
        s.shape.beginFill('#ff0000');
        s.shape.drawCircle(tempx, tempy, 20);
        s.shape.endFill();
        // 绘制数字
        var text = new annie.TextField();
        s.addChild(text);
        text.x = tempx-5;
        text.y = tempy-10;
        text.text = i + 1;
        text.size = 20;
    }

    // 绘制曲线
    s.shape.beginStroke('#000000', 1);
    s.shape.moveTo(s.points[0].x, s.points[0].y);
    for (i = 1; i < s.numPoints - 2; i++) {
        var xc = (s.points[i].x + s.points[i + 1].x) / 2;
        var yc = (s.points[i].y + s.points[i + 1].y) / 2;
        s.shape.quadraticCurveTo(s.points[i].x, s.points[i].y, xc, yc);
    }
    s.shape.quadraticCurveTo(s.points[i].x, s.points[i].y, s.points[i + 1].x, s.points[i + 1].y);
    s.shape.endStroke();

};


