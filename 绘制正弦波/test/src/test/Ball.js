var test=test||{};
test.Ball=function(radius,color){
	var s = this;
	F2xContainer.call(s);
	s.initUI();

	s.radius = radius || 40;
	s.color = color || '#ff0000';
	s.init();
};
F2xExtend(test.Ball,F2xContainer);
test.Ball.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	
	//f2x_auto_created_init_end
	
};
test.Ball.prototype.init = function () {
	var s = this;
	s.shape = new annie.Shape();
	s.addChild(s.shape);
	s.shape.beginFill(s.color);
	s.shape.drawCircle(0,0,s.radius);
	s.shape.endFill();
};