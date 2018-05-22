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
	var _d1=Flash2x.t(0,decodeURI("%E9%9D%9E%E9%97%AD%E5%90%88"),30,"#FFFFFF","Times New Roman",0,0,90.2,33.25,32,"left",false,false,"multiline",false);
	_d1.name="btn_name";
	s.btn_name=_d1;
	Flash2x.d(_d1,{x:94.9,y:16.25});
	var _d0=Flash2x.s({type:0,data:"A13FFIAAqJMArvAAAIAAKJg"},{type:0,color:"#000000"},null);
	Flash2x.d(_d0,{x:140,y:32.48});
	s.addChild(_d0);
	s.addChild(_d1);
};
test.refresh=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(test.refresh,F2xContainer);
test.refresh.prototype.initUI=function(){
	var s = this;
	var _d1=Flash2x.t(0,decodeURI("%E5%88%B7%E6%96%B0"),30,"#FFFFFF","Times New Roman",0,0,60.2,33.25,32,"left",false,false,"multiline",false);
	_d1.name="btn_name";
	s.btn_name=_d1;
	Flash2x.d(_d1,{x:109.9,y:16.25});
	var _d0=Flash2x.s({type:0,data:"A13FFIAAqJMArvAAAIAAKJg"},{type:0,color:"#000000"},null);
	Flash2x.d(_d0,{x:140,y:32.48});
	s.addChild(_d0);
	s.addChild(_d1);
};
