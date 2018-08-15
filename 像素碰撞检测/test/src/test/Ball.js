var test=test||{};
test.Ball=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(test.Ball,F2xContainer);
test.Ball.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("test","F2xAuto_0");
	Flash2x.d(_d0,{x:-78,y:-78});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
