var test = test || {};
test.Test = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    s.init();
};
F2xExtend(test.Test, F2xContainer);
test.Test.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=new test.backgroundLayer();
	_d0.name="backgroundLayer";
	s.backgroundLayer=_d0;
	s.addChild(_d0);
	//f2x_auto_created_init_end

};
test.Test.prototype.init = function () {
    var s = this;
    s.balls = [];
    s.numBalls = 100;
    s.fl = 250;
    s.vpX = 320;
    s.vpY = 640;
    s.gravity = 0.2;
    s.floor = 200;
    s.bounce = -0.6;

    for (var i=0;i<s.numBalls;i++){
        var ball = new test.Ball3D(3,'#'+Math.random().toString(16).substr(-6));
        s.balls.push(ball);
        s.addChild(ball);
        ball.ypos = -100;
        ball.vx = Math.random()*6-3;
        ball.vy = Math.random()*6-3;
        ball.vz = Math.random()*6-3;
    }

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
};

test.Test.prototype.onEnterFrame = function () {
    var s = this;
    for(var i=0;i<s.numBalls;i++){
        var ball = s.balls[i];
        s.move(ball);
    }
};

test.Test.prototype.move = function (ball) {
    var s = this;
    ball.vy += s.gravity;
    ball.xpos += ball.vx;
    ball.ypos += ball.vy;
    ball.zpos += ball.vz;

    if(ball.ypos > s.floor){
        ball.ypos = s.floor;
        ball.vy *= s.bounce;
    }
    if(ball.zpos>-s.fl){
        var scale = s.fl / (s.fl+ball.zpos);
        ball.scaleX = ball.scaleY = scale;
        ball.x = s.vpX + ball.xpos*scale;
        ball.y = s.vpY + ball.ypos*scale;
        ball.visible = true;
    }else{
        ball.visible = false;
    }
};















