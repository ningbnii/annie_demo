var test=test||{};
test.Arrow=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	s.init();
};
F2xExtend(test.Arrow,F2xContainer);
test.Arrow.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	
	//f2x_auto_created_init_end
	
};

test.Arrow.prototype.init = function (e) {
	var s = this;
	s.shape = new annie.Shape();
	s.shape.beginStroke('#ff0000',1);
	s.shape.moveTo(-50,-25);
	s.shape.lineTo(0,-25);
	s.shape.lineTo(0,-50);
	s.shape.lineTo(50,0);
	s.shape.lineTo(0,50);
	s.shape.lineTo(0,25);
	s.shape.lineTo(-50,25);
	s.shape.lineTo(-50,-25);
	s.shape.endStroke();
	s.addChild(s.shape);
};
