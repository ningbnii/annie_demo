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
	var _d2=new test.tanke();
	_d2.name="tanke";
	s.tanke=_d2;
	Flash2x.d(_d2,{x:321,y:775.25});
	var _d1=new test.move();
	_d1.name="control";
	s.control=_d1;
	Flash2x.d(_d1,{x:90,y:1046.9});
	var _d0=new test.backgroundLayer();
	_d0.name="backgroundLayer";
	s.backgroundLayer=_d0;
	s.addChild(_d0);
	s.addChild(_d1);
	s.addChild(_d2);
	//f2x_auto_created_init_end

};
test.Test.prototype.init = function () {
    var s = this;
    var hit = false;

    var control = '';
    s.control.up.addEventListener(annie.MouseEvent.MOUSE_DOWN, moveUp);
    s.control.right.addEventListener(annie.MouseEvent.MOUSE_DOWN, moveRight);
    s.control.down.addEventListener(annie.MouseEvent.MOUSE_DOWN, moveDown);
    s.control.left.addEventListener(annie.MouseEvent.MOUSE_DOWN, moveLeft);
    s.control.addEventListener(annie.MouseEvent.MOUSE_UP, moveStop);
    s.addEventListener(annie.Event.ENTER_FRAME, onEnterFrame);

    function moveUp(e) {
        s.tanke.gotoAndStop(1);
        control = 'up';
        s.tanke.move = hit ? false : true;
    }

    function moveRight() {
        s.tanke.gotoAndStop(2);
        control = 'right';
        s.tanke.move = hit ? false : true;
    }

    function moveDown() {
        s.tanke.gotoAndStop(3);
        control = 'down';
        s.tanke.move = hit ? false : true;
    }

    function moveLeft() {
        s.tanke.gotoAndStop(4);
        control = 'left';
        s.tanke.move = hit ? false : true;
    }

    function moveStop() {
        s.tanke.move = false;
        control = '';
    }

    function hitBox(source, target) {
        /* 源物体和目标物体都包含 x, y 以及 width, height */
        return !(
            ( ( source.y + source.height ) < ( target.y ) ) ||
            ( source.y > ( target.y + target.height ) ) ||
            ( ( source.x + source.width ) < target.x ) ||
            ( source.x > ( target.x + target.width ) )
        );
    }

    function onEnterFrame() {
        switch (control) {
            case 'up':

                s.tanke.y--;
                break;
            case 'right':
                s.tanke.x++;
                break;
            case 'down':
                s.tanke.y++;
                break;
            case 'left':
                s.tanke.x--;
                break;
        }
        // 碰撞检测
        // hit = false;
        // s.backgroundLayer.children.forEach(function (t) {
        //     if (t instanceof test.wall) {
        //         if (hitBox(s.tanke, t)) {
        //             hit = true;
        //         }
        //     }
        // });
    }
};
















