var test=test||{};
test.up=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(test.up,F2xContainer);
test.up.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("test","F2xAuto_0");
	s.addChild(_d0);
};
test.down=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(test.down,F2xContainer);
test.down.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("test","F2xAuto_2");
	s.addChild(_d0);
};
test.left=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(test.left,F2xContainer);
test.left.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("test","F2xAuto_3");
	s.addChild(_d0);
};
test.right=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(test.right,F2xContainer);
test.right.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("test","F2xAuto_1");
	s.addChild(_d0);
};
test.backgroundLayer=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(test.backgroundLayer,F2xContainer);
test.backgroundLayer.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.s({type:0,data:"Egx/BYwMAAAixfMBj/AAAMAAACxfg"},{type:0,color:"#999999"},null);
	Flash2x.d(_d0,{x:320,y:568});
	s.addChild(_d0);
};
