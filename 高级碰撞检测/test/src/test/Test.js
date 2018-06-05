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
    s._balls = [];
    s._grid = [];
    s._numBalls = 100;
    s.radius = 10;
    s.grid_size = 2*s.radius;
    s.stageWidth = 640;
    s.stageHeight = 1136;
    s._numChecks = 0;
    s.gridLayer = new annie.Sprite();
    s.addChild(s.gridLayer);
    s.gridShape = new annie.Shape();
    s.gridLayer.addChild(s.gridShape);

    s.makeBalls();
    s.makeGrid();
    s.drawGrid();
    s.assignBallToGrid();
    s.checkGrid();
    trace(s._numChecks);
};

test.Test.prototype.makeBalls = function () {
    var s = this;
    for (var i = 0; i < s._numBalls; i++) {
        var ball = new test.Ball(s.radius);
        ball.x = Math.random() * s.stageWidth;
        ball.y = Math.random() * s.stageHeight;
        s.addChild(ball);
        s._balls.push(ball);
    }
};

test.Test.prototype.makeGrid = function () {
    var s = this;
    for (var i = 0; i < s.stageWidth / s.grid_size; i++) {
        s._grid[i] = [];
        for (var j = 0; j < s.stageHeight / s.grid_size; j++) {
            s._grid[i][j] = [];
        }
    }
};

test.Test.prototype.drawGrid = function () {
    var s = this;
    s.gridShape.beginStroke('#ffffff', 0.5);
    for (var i = 0; i < s.stageWidth; i += s.grid_size) {
        s.gridShape.moveTo(i, 0);
        s.gridShape.lineTo(i, s.stageHeight);
    }
    for (var j = 0; j < s.stageHeight; j += s.grid_size) {
        s.gridShape.moveTo(0, j);
        s.gridShape.lineTo(s.stageWidth, j);
    }
    s.gridShape.endStroke();
};

test.Test.prototype.assignBallToGrid = function () {
    var s = this;
    for (var i = 0; i < s._numBalls; i++) {
        var ball = s._balls[i];
        var xpos = Math.floor(ball.x / s.grid_size);
        var ypos = Math.floor(ball.y / s.grid_size);
        s._grid[xpos][ypos].push(ball);
    }
};

test.Test.prototype.checkGrid = function () {
    var s = this;
    for (var i = 0; i < s._grid.length; i++) {
        for (var j = 0; j < s._grid[i].length; j++) {
            s.checkOneCell(i, j);
            s.checkTwoCells(i, j, i + 1, j);
            s.checkTwoCells(i, j, i - 1, j + 1);
            s.checkTwoCells(i, j, i, j + 1);
            s.checkTwoCells(i, j, i + 1, j + 1);

        }
    }
};

test.Test.prototype.checkOneCell = function (x, y) {
    var s = this;
    var cell = s._grid[x][y];
    for (var i = 0; i < cell.length; i++) {
        var ballA = cell[i];
        for (var j = i + 1; j < cell.length; j++) {
            var ballB = cell[j];
            s.checkCollision(ballA, ballB);
        }
    }
};

test.Test.prototype.checkCollision = function (ballA, ballB) {
    var s = this;
    s._numChecks++;
    var dx = ballB.x - ballA.x;
    var dy = ballB.y - ballA.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < ballA.radius + ballB.radius) {
        ballA.setColor('#ffff00');
        ballB.setColor('#ffff00');
    }
};

test.Test.prototype.checkTwoCells = function (x1, y1, x2, y2) {
    var s = this;
    if (x2 < 0) return;
    if (x2 >= s._grid.length) return;
    if (y2 >= s._grid[x2].length) return;
    var cell0 = s._grid[x1][y1];
    var cell1 = s._grid[x2][y2];
    for (var i = 0; i < cell0.length; i++) {
        var ballA = cell0[i];
        for (var j = 0; j < cell1.length; j++) {
            var ballB = cell1[j];
            s.checkCollision(ballA, ballB);
        }
    }
};

















