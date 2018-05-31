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

    s.numParticles = 100;
    s.minDist = 100;
    s.springAmount = 0.0025;
    s.particles = [];

    s.shape = new annie.Shape();
    s.addChild(s.shape);

    for (var i = 0; i < s.numParticles; i++) {
        var size = Math.random() * 10 + 2;
        var particle = new test.Ball(size, '#ffffff');
        particle.x = Math.random() * 640;
        particle.y = Math.random() * 1136;
        particle.vx = Math.random() * 6 - 3;
        particle.vy = Math.random() * 6 - 3;
        particle.mass = size;
        s.addChild(particle);
        s.particles.push(particle);
    }

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
};

test.Test.prototype.onEnterFrame = function () {
    var s = this;
    s.shape.clear();
    for (var i = 0; i < s.numParticles; i++) {
        var particle = s.particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x > 640) {
            particle.x = 0;
        }
        if (particle.x < 0) {
            particle.x = 640;
        }
        if (particle.y > 1136) {
            particle.y = 0;
        }
        if (particle.y < 0) {
            particle.y = 1136;
        }
    }

    for (var i = 0; i < s.numParticles - 1; i++) {
        var partA = s.particles[i];
        for (var j = i + 1; j < s.numParticles; j++) {
            var partB = s.particles[j];
            s.spring(partA, partB);
        }
    }
};

test.Test.prototype.spring = function (partA, partB) {
    var s = this;
    var dx = partB.x - partA.x;
    var dy = partB.y - partA.y;
    var dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < s.minDist) {
        var color = 'rgba(0,0,0,' + (1 - dist / s.minDist) + ')';
        s.shape.beginStroke(color, 1);
        s.shape.moveTo(partA.x, partA.y);
        s.shape.lineTo(partB.x, partB.y);
        s.shape.endStroke();

        var ax = dx * s.springAmount;
        var ay = dy * s.springAmount;
        partA.vx += ax / partA.mass;
        partA.vy += ay / partA.mass;
        partB.vx -= ax / partB.mass;
        partB.vy -= ay / partB.mass;
    }
};













