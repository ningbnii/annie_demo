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
    s.ball = new test.Ball(20);
    s.ball.x = 320;
    s.ball.y = 568;
    s.addChild(s.ball);
    s.shape = new annie.Shape();
    s.addChild(s.shape);

    s.handles = [];
    s.spring = 0.1;
    s.friction = 0.8;
    s.numHandles = 3;

    for (var i = 0; i < s.numHandles; i++) {
        var handle = new test.Ball(10, '#0000ff');
        handle.x = Math.random() * 640;
        handle.y = Math.random() * 1136;
        handle.pressStatus = false;
        s.addChild(handle);
        s.handles.push(handle);
    }

    for (var i=0;i<s.numHandles;i++){
        s.handles[i].addEventListener(annie.MouseEvent.MOUSE_DOWN, s.onPress.bind(this));
        s.handles[i].addEventListener(annie.MouseEvent.MOUSE_UP, s.onRelease.bind(this));
    }

    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, s.moveHandle.bind(this));
    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));


};

test.Test.prototype.onEnterFrame = function () {
    var s = this;

    for (var i = 0; i < s.numHandles; i++) {
        var handle = s.handles[i];
        var dx = handle.x - s.ball.x;
        var dy = handle.y - s.ball.y;
        s.ball.vx += dx * s.spring;
        s.ball.vy += dy * s.spring;
    }

    s.ball.vx *= s.friction;
    s.ball.vy *= s.friction;
    s.ball.x += s.ball.vx;
    s.ball.y += s.ball.vy;

    s.shape.clear();
    s.shape.beginStroke('#000000', 1);
    for (var i = 0; i < s.numHandles; i++) {
        s.shape.moveTo(s.ball.x, s.ball.y);
        s.shape.lineTo(s.handles[i].x, s.handles[i].y);
    }
    s.shape.endStroke();

};

test.Test.prototype.onPress = function (e) {
    var s = this;
    var handle = e.target.parent;
    handle.pressStatus = true;
};

test.Test.prototype.onRelease = function (e) {
    var s = this;
    var handle = e.target.parent;
    handle.pressStatus = false;
};

test.Test.prototype.moveHandle = function (e) {
    var s = this;
    for (var i = 0; i < s.numHandles; i++) {
        trace(s.handles[i].pressStatus)
        if (s.handles[i].pressStatus) {
            s.handles[i].x = e.localX;
            s.handles[i].y = e.localY;
        }
    }

};





