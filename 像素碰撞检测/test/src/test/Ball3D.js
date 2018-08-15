var test = test || {};
test.Ball3D = function (radius, color) {
    var s = this;
    F2xContainer.call(s);
    s.initUI();

    s.xpos = 0;
    s.ypos = 0;
    s.zpos = 0;
    s.vx = 0;
    s.vy = 0;
    s.vz = 0;
    s.mass = 1;

    s.radius = radius || 40;
    s.color = color || '#ffffff';

    s.shape = new annie.Shape();
    s.addChild(s.shape);
    s.shape.beginFill(s.color);
    s.shape.drawCircle(0, 0, s.radius);
    s.shape.endFill();
};
F2xExtend(test.Ball3D, F2xContainer);
test.Ball3D.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	
	//f2x_auto_created_init_end

};
