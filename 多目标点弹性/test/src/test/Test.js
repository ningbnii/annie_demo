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
    s.gravity = 5;
    s.numHandles = 3;
    s.press = false;

    s.pA = {
        x: 0,
        y: 0
    };
    s.pB = {
        x: 0,
        y: 0
    };


    for (var i = 0; i < s.numHandles; i++) {
        var handle = new test.Ball(10, '#0000ff');
        handle.x = Math.random() * 640;
        handle.y = Math.random() * 1136;
        handle.pressStatus = false;
        s.addChild(handle);
        s.handles.push(handle);
    }

    // for (var i = 0; i < s.numHandles; i++) {
    //     s.handles[i].addEventListener(annie.MouseEvent.MOUSE_DOWN, s.onPress.bind(this));
    //     s.handles[i].addEventListener(annie.MouseEvent.MOUSE_UP, s.onRelease.bind(this));
    // }

    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, s.moveHandle.bind(this));
    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));

    s.addEventListener(annie.MouseEvent.MOUSE_DOWN,function () {
        s.press = true;
    }.bind(this));
    s.addEventListener(annie.MouseEvent.MOUSE_UP,function () {
        s.press = false;
    }.bind(this));
};

test.Test.prototype.onEnterFrame = function () {
    var s = this;

    for (var i = 0; i < s.handles.length; i++) {
        var handle = s.handles[i];
        var dx = handle.x - s.ball.x;
        var dy = handle.y - s.ball.y;
        s.ball.vx += dx * s.spring;
        s.ball.vy += dy * s.spring;

    }

    s.ball.vx *= s.friction;
    s.ball.vy *= s.friction;
    s.ball.vy += s.gravity;
    s.ball.x += s.ball.vx;
    s.ball.y += s.ball.vy;


    s.shape.clear();
    s.shape.beginStroke('#000000', 1);
    for (var i = 0; i < s.handles.length; i++) {
        s.shape.moveTo(s.ball.x, s.ball.y);
        s.shape.lineTo(s.handles[i].x, s.handles[i].y);
    }
    s.shape.endStroke();

};

test.Test.prototype.onPress = function (e) {
    var s = this;
    var handle = e.target.parent;
    handle.pressStatus = true;
    s.pA.x = e.localX;
    s.pA.y = e.localY;
};

test.Test.prototype.onRelease = function (e) {
    var s = this;
    var handle = e.target.parent;
    handle.pressStatus = false;
};

test.Test.prototype.moveHandle = function (e) {
    var s = this;

    s.pB.x = e.localX;
    s.pB.y = e.localY;

    for (var i = 0; i < s.handles.length; i++) {
        // if (s.handles[i].pressStatus) {
        //     s.handles[i].x = e.localX;
        //     s.handles[i].y = e.localY;
        //
        // }
        if(s.press){

            // 快速排斥实验
            var pC = {
                x: s.ball.x,
                y: s.ball.y
            };
            var pD = {
                x: s.handles[i].x,
                y: s.handles[i].y
            };
            if (Math.max(pC.x, pD.x) < Math.min(s.pA.x, s.pB.x) || Math.max(pC.y, pD.y) < Math.min(s.pA.y, s.pB.y) || Math.max(s.pA.x, s.pB.x) < Math.min(pC.x, pD.x) || Math.max(s.pA.y, s.pB.y) < Math.min(pC.y, pD.y)) {
                // 必不相交
                continue;
            } else {
                // 跨立实验，通过叉积来判断线段相交
                if (((s.pA.x - pD.x) * (pC.y - pD.y) - (pC.x - pD.x) * (s.pA.y - pD.y)) * ((s.pB.x - pD.x) * (pC.y - pD.y) - (pC.x - pD.x) * (s.pB.y - pD.y)) <= 0 &&
                    ((pC.x - s.pB.x) * (s.pA.y - s.pB.y) - (s.pA.x - s.pB.x) * (pC.y - s.pB.y)) * ((pD.x - s.pB.x) * (s.pA.y - s.pB.y) - (s.pA.x - s.pB.x) * (pD.y - s.pB.y)) <= 0) {
                    s.handles.splice(i, 1);
                }
            }
        }


    }


};





