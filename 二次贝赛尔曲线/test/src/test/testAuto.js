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
test.changeBtn=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(test.changeBtn,F2xContainer);
test.changeBtn.prototype.initUI=function(){
	var s = this;
	var _d1=Flash2x.t(0,decodeURI("%E6%9B%B2%E7%BA%BF%E8%BF%87%E6%8E%A7%E5%88%B6%E7%82%B9"),30,"#FFFFFF","Times New Roman",0,0,222,33.25,32,"center",false,false,"multiline",false);
	_d1.name="btn_name";
	s.btn_name=_d1;
	Flash2x.d(_d1,{x:4,y:10.3});
	var _d0=Flash2x.s({type:0,data:"AxuEJIAAoRMAjdAAAIAAIRg"},{type:0,color:"#000000"},null);
	Flash2x.d(_d0,{x:113.5,y:26.5});
	s.addChild(_d0);
	s.addChild(_d1);
};
