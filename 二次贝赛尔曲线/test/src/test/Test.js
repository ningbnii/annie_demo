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
	var _d1=new test.changeBtn();
	_d1.name="changeBtn";
	s.changeBtn=_d1;
	Flash2x.d(_d1,{x:202,y:1035.95});
	var _d0=new test.backgroundLayer();
	_d0.name="backgroundLayer";
	s.backgroundLayer=_d0;
	s.addChild(_d0);
	s.addChild(_d1);
	//f2x_auto_created_init_end

};
test.Test.prototype.init = function () {
    var s = this;
    // 起点
    s.x0 = 100;
    s.y0 = 200;
    // 控制点
    s.x1 = 0;
    s.y1 = 0;
    // 终点
    s.x2 = 300;
    s.y2 = 200;

    // 曲线是否过控制点
    s.throw = true;
    // 鼠标按下状态
    s.downStatus = false;

    s.shape = new annie.Shape();
    s.addChild(s.shape);

    s.shape.beginStroke('#000000', 1);
    s.shape.moveTo(s.x0, s.y0);
    s.shape.quadraticCurveTo(s.x1, s.y1, s.x2, s.y2);
    s.shape.endStroke();

    s.addEventListener(annie.MouseEvent.MOUSE_DOWN,s.onMouseDown.bind(this));
    s.addEventListener(annie.MouseEvent.MOUSE_UP,s.onMouseUp.bind(this));
    s.addEventListener(annie.MouseEvent.MOUSE_MOVE, s.onMouseMove.bind(this));
    s.changeBtn.addEventListener(annie.MouseEvent.CLICK,s.changeThrowStatus.bind(this));
};

test.Test.prototype.onMouseDown = function (e) {
    var s = this;
    s.downStatus = true;
};

test.Test.prototype.onMouseUp = function (e) {
    var s = this;
    s.downStatus = false;
};

test.Test.prototype.changeThrowStatus = function () {
    var s = this;
    s.throw = s.throw == true ? false : true;
    s.changeBtn.btn_name.text = s.throw == true ? '曲线过控制点' : '曲线不过控制点';
};

/**
 * 通过移动鼠标控制曲线形状
 * @param e
 */
test.Test.prototype.onMouseMove = function (e) {
    var s = this;
    if(s.downStatus){
        if(s.throw){
            s.x1 = e.localX * 2 - (s.x0 + s.x2) / 2;
            s.y1 = e.localY * 2 - (s.y0 + s.y2) / 2;
        }else{
            s.x1 = e.localX;
            s.y1 = e.localY;
        }

        s.shape.clear();
        // 绘制控制点
        s.shape.beginFill('#ff0000');
        s.shape.drawCircle(e.localX,e.localY,5);
        s.shape.endFill();
        // 绘制曲线
        s.shape.beginStroke('#000000', 1);
        s.shape.moveTo(s.x0, s.y0);
        s.shape.quadraticCurveTo(s.x1, s.y1, s.x2, s.y2);
        s.shape.endStroke();
    }

};



