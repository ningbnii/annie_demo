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
    s.tempx = 0;
    s.tempy = 0;
    s.down = false;
    s.points = [];
    s.shape = new annie.Shape();
    s.addChild(s.shape);

    s.addEventListener(annie.MouseEvent.MOUSE_DOWN, s.onMouseDown.bind(this));
    s.addEventListener(annie.MouseEvent.MOUSE_UP, s.onMouseUp.bind(this));
    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, s.onMouseMove.bind(this));

};


test.Test.prototype.onMouseDown = function (e) {
    var s = this;
    s.down = true;
    s.tempx = e.localX;
    s.tempy = e.localY;
    s.points.push({
        x: s.tempx,
        y: s.tempy
    });

};

test.Test.prototype.onMouseMove = function (e) {
    var s = this;
    if (s.down) {

        s.shape.beginStroke('#000000', 1);
        s.shape.moveTo(s.tempx, s.tempy);
        s.shape.lineTo(e.localX, e.localY);
        s.shape.endStroke();
        s.tempx = e.localX;
        s.tempy = e.localY;

        // s.points.push({
        //     x: e.localX,
        //     y: e.localY
        // });
        // console.log(s.points);
        // if (s.points.length > 3) {
        //     s.shape.clear();
        //     s.shape.beginStroke('#000000', 1);
        //     s.shape.moveTo(s.points[0].x, s.points[0].y);
        //     for (var i = 0; i < s.points.length - 2; i++) {
        //         var xc = (s.points[i].x + s.points[i + 1].x) / 2;
        //         var yc = (s.points[i].y + s.points[i + 1].y) / 2;
        //         s.shape.quadraticCurveTo(s.points[i].x, s.points[i].y, xc, yc);
        //     }
        //     s.shape.quadraticCurveTo(s.points[i].x, s.points[i].y, s.points[i + 1].x, s.points[i + 1].y);
        //     s.shape.endStroke();
        // }
    }

};

test.Test.prototype.onMouseUp = function (e) {
    var s = this;
    s.down = false;
};