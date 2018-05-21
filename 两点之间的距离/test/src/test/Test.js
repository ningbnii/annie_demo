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
	var _d1=Flash2x.t(0,decodeURI("0"),30,"#000000","Times New Roman",0,0,100,33.25,35.25,"left",false,false,"multiline",false);
	_d1.name="distance";
	s.distance=_d1;
	Flash2x.d(_d1,{x:51,y:28.3});
	var _d0=new test.backgroundLayer();
	_d0.name="backgroundLayer";
	s.backgroundLayer=_d0;
	s.addChild(_d0);
	s.addChild(_d1);
	//f2x_auto_created_init_end

};
test.Test.prototype.init = function () {
    var s = this;
    s.centerX = 320;
    s.centerY = 568;
    s.shape = new annie.Shape();
    s.addChild(s.shape);

    s.shape.beginFill('#000000');
    s.shape.drawRect(-2, -2, 4, 4);
    s.shape.endFill();
    s.shape.x = s.centerX;
    s.shape.y = s.centerY;

    s.shape1 = new annie.Shape();
    s.addChild(s.shape1);

    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, s.onMouseMove.bind(this));
};


test.Test.prototype.onMouseMove = function (e) {
    var s = this;

    s.shape1.clear();
    s.shape1.beginStroke('#ff0000', 1);
    s.shape1.moveTo(s.shape.x, s.shape.y);
    s.shape1.lineTo(e.localX, e.localY);
    s.shape1.endStroke();

    var dx = s.shape.x - e.localX;
    var dy = s.shape.y - e.localY;
    var dist = Math.sqrt(dx*dx+dy*dy);
    s.distance.text = dist.toFixed(2).toString();
};