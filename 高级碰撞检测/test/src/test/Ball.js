var test=test||{};
test.Ball=function(radius,color){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	s.vx = 0;
	s.vy = 0;
	s.radius = radius || 40;
	s.color = color || '#ff0000';
    s.shape = new annie.Shape();
    s.addChild(s.shape);
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
	s.shape.clear();
	s.shape.beginFill(s.color);
	s.shape.drawCircle(0,0,s.radius);
	s.shape.endFill();
};

test.Ball.prototype.setColor = function (color) {
	var s = this;
	s.color = color;
	s.init();
};

test.Ball.prototype.setRadius = function () {
	
}