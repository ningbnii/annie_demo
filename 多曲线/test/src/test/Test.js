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
    var _d2 = new test.refresh();
    _d2.name = "refresh";
    s.refresh = _d2;
    Flash2x.d(_d2, {x: 27.95, y: 1035.5});
    var _d1 = new test.changeBtn();
    _d1.name = "changeBtn";
    s.changeBtn = _d1;
    Flash2x.d(_d1, {x: 336.3, y: 1035.5});
    var _d0 = new test.backgroundLayer();
    _d0.name = "backgroundLayer";
    s.backgroundLayer = _d0;
    s.addChild(_d0);
    s.addChild(_d1);
    s.addChild(_d2);
    //f2x_auto_created_init_end

};
test.Test.prototype.init = function () {
    var s = this;

    s.numPoints = 9;
    // 闭合状态
    s.close = false;
    s.shape = new annie.Shape();
    s.addChild(s.shape);
    s.textLayer = new annie.Sprite();
    s.addChild(s.textLayer);

    s.create();
    s.refresh.addEventListener(annie.MouseEvent.CLICK, s.create.bind(this));
    s.changeBtn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        var s = this;
        s.close = s.close == true ? false : true;
        s.changeBtn.btn_name.text = s.close == true ? '闭合' : '非闭合';
    }.bind(this))
};

test.Test.prototype.create = function () {
    var s = this;
    s.shape.clear();
    s.textLayer.removeAllChildren();
    // 建立由随机点构成的一个数组
    s.points = new Array();
    for (var i = 0; i < s.numPoints; i++) {
        var tempx = Math.random() * 600 + 20;
        var tempy = Math.random() * 950 + 20;
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
        s.textLayer.addChild(text);
        text.x = tempx - 5;
        text.y = tempy - 10;
        text.text = i + 1;
        text.size = 20;
    }

    // 绘制曲线
    s.shape.beginStroke('#000000', 1);
    if (s.close) {
        var xc1 = (s.points[0].x + s.points[s.numPoints - 1].x) / 2;
        var yc1 = (s.points[0].y + s.points[s.numPoints - 1].y) / 2;
        s.shape.moveTo(xc1, yc1);
        for (var i = 0; i < s.numPoints - 1; i++) {
            var xc = (s.points[i].x + s.points[i + 1].x) / 2;
            var yc = (s.points[i].y + s.points[i + 1].y) / 2;
            s.shape.quadraticCurveTo(s.points[i].x, s.points[i].y, xc, yc);
        }
        s.shape.quadraticCurveTo(s.points[i].x, s.points[i].y, xc1, yc1);
    } else {
        s.shape.moveTo(s.points[0].x, s.points[0].y);
        for (var i = 1; i < s.numPoints - 2; i++) {
            var xc = (s.points[i].x + s.points[i + 1].x) / 2;
            var yc = (s.points[i].y + s.points[i + 1].y) / 2;
            s.shape.quadraticCurveTo(s.points[i].x, s.points[i].y, xc, yc);
        }
        s.shape.quadraticCurveTo(s.points[i].x, s.points[i].y, s.points[i + 1].x, s.points[i + 1].y);
    }

    s.shape.endStroke();
};

