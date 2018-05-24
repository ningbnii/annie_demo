var test=test||{};
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
