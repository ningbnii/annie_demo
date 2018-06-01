var test=test||{};
test.wall=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(test.wall,F2xContainer);
test.wall.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("test","F2xAuto_1");
	Flash2x.d(_d0,{a:0.5607,b:0.5611});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
