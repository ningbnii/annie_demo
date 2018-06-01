var test=test||{};
test.tanke=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
	s.move = false;
};
F2xExtend(test.tanke,F2xMovieClip);
test.tanke.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("test","ic_launcher");
	s.a().b(4);
	s.a().b(1).c(_d0).b(1).c(_d0,{x:60,r:90}).b(1).c(_d0,{x:60,y:60,r:180}).b(1).c(_d0,{y:60,r:-90});
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
};
