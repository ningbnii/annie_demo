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
    var _d0 = new test.backgroundLayer();
    _d0.name = "backgroundLayer";
    s.backgroundLayer = _d0;
    s.addChild(_d0);
    //f2x_auto_created_init_end

};
test.Test.prototype.init = function () {
    var s = this;

    s.balls = [];
    s.numBalls = 50;
    s.fl = 250;
    s.vpX = 320;
    s.vpY = 568;
    s.mouseX =320;
    s.mouseY = 500;
    s.shape = new annie.Shape();
    s.addChild(s.shape);

    for (var i = 0; i < s.numBalls; i++) {
        var ball = new test.Ball3D(5,'#'+Math.random().toString(16).substr(-6));
        s.balls.push(ball);
        ball.xpos = Math.random() * 200 - 100;
        ball.ypos = Math.random() * 200 - 100;
        ball.zpos = Math.random() * 200 - 100;
        s.addChild(ball);
    }

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, function (e) {
        s.mouseX = e.localX;
        s.mouseY = e.localY;
    }.bind(this))
};

test.Test.prototype.onEnterFrame = function () {
    var s = this;

    var angleX = (s.mouseY - s.vpY) * 0.001;
    var angleY = (s.mouseX - s.vpX) * 0.001;
    for (var i = 0; i < s.numBalls; i++) {
        var ball = s.balls[i];
        s.rotateX(ball, angleX);
        s.rotateY(ball, angleY);
        s.doPerspective(ball);
    }
    s.shape.clear();
    s.shape.beginStroke('#ffffff',1);
    s.shape.moveTo(s.balls[0].x,s.balls[0].y);
    for(var i=1;i<s.numBalls;i++){
        s.shape.lineTo(s.balls[i].x,s.balls[i].y);
    }
    s.shape.endStroke();
};

test.Test.prototype.rotateX = function (ball, angleX) {
    var s = this;
    var cosX = Math.cos(angleX);
    var sinX = Math.sin(angleX);
    var y1 = ball.ypos * cosX - ball.zpos * sinX;
    var z1 = ball.zpos * cosX + ball.ypos * sinX;

    ball.ypos = y1;
    ball.zpos = z1;
};

test.Test.prototype.rotateY = function (ball, angleY) {
    var s = this;
    var cosY = Math.cos(angleY);
    var sinY = Math.sin(angleY);
    var x1 = ball.xpos * cosY - ball.zpos * sinY;
    var z1 = ball.zpos * cosY + ball.xpos * sinY;
    ball.xpos = x1;
    ball.zpos = z1;
};

test.Test.prototype.doPerspective = function (ball) {
    var s = this;
    if (ball.zpos > -s.fl) {
        var scale = s.fl / (s.fl + ball.zpos);
        ball.scaleX = ball.scaleY = scale;
        ball.x = s.vpX + ball.xpos * scale;
        ball.y = s.vpY + ball.ypos * scale;
        ball.visible = true;
    } else {
        ball.visible = false;
    }
};















