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
	var _d0=new test.backgroundLayer();
	_d0.name="backgroundLayer";
	s.backgroundLayer=_d0;
	s.addChild(_d0);
	//f2x_auto_created_init_end

};
test.Test.prototype.init = function () {
    var s = this;
    s.tempx = 0;
    s.tempy = 0;
    s.down = false;
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

};

test.Test.prototype.onMouseMove = function (e) {
    var s = this;
    if(s.down){
        s.shape.beginStroke('#000000', 1);
        s.shape.moveTo(s.tempx, s.tempy);
        s.shape.lineTo(e.localX, e.localY);
        s.shape.endStroke();
        s.tempx = e.localX;
        s.tempy = e.localY;
    }

};

test.Test.prototype.onMouseUp = function (e) {
    var s = this;
    s.down = false;
};