var test=test||{};
test.Ship=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	s.showFlame = false;
	s.draw();
};
F2xExtend(test.Ship,F2xContainer);
test.Ship.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	
	//f2x_auto_created_init_end
	
};

test.Ship.prototype.draw = function () {
	var s = this;
	s.shape = new annie.Shape();
	s.addChild(s.shape);
	s.shape.beginStroke('#ffffff',1);
	s.shape.moveTo(10,0);
	s.shape.lineTo(-10,10);
	s.shape.lineTo(-5,0);
	s.shape.lineTo(-10,-10);
	s.shape.lineTo(10,0);
	s.shape.endStroke();

	s.flame = new annie.Shape();
	s.addChild(s.flame);
	s.flame.beginStroke('#ffffff',1);
    s.flame.moveTo(-7.5,-5);
    s.flame.lineTo(-15,0);
    s.flame.lineTo(-7.5,5);
    s.flame.endStroke();
    s.flame.visible = s.showFlame;
};

test.Ship.prototype.changeShowFlame = function (showFlame) {
	var s = this;
	s.showFlame = showFlame;
	s.flame.visible = s.showFlame;
};
