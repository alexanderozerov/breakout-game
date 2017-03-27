var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var ball = {
  x: 50,
  y: 50,
  dx: 2,
  dy: -2,
  r: 10,
  color: '#0095DD',
  move: function () {
    if (this.x <= this.r || this.x >= canvas.width - this.r) {
      this.dx *= -1;
    }
    if (this.y <= this.r || this.y >= canvas.height - this.r) {
      this.dy *= -1;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
};

var paddle = {
  x: 350,
  y: 490,
  width: 100,
  height: 10,
  color: '#0095DD',
  move: function () {
    if (controls.rightPressed && this.x < canvas.width - this.width) {
      this.x += 7;
    }
    if (controls.leftPressed && this.x > 0) {
      this.x -= 7;
    }
  }
};

var controls = {
  leftPressed: false,
  rightPressed: false
};

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function keyDownHandler(e) {
  if (e.keyCode === 39) {
    controls.rightPressed = true;
  }
  if (e.keyCode === 37) {
    controls.leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode === 39) {
    controls.rightPressed = false;
  }
  if (e.keyCode === 37) {
    controls.leftPressed = false;
  }
}

function drawPaddle() {
  ctx.beginPath();
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
  ctx.fillStyle = paddle.color;
  ctx.fill();
  ctx.closePath();
  paddle.move();
}

function drawBall() {
  ctx.beginPath();
  ctx.fillStyle = ball.color;
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  ball.move();
}

function drawTable() {
  //
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTable();
  drawBall();
  drawPaddle();
}

setInterval(draw, 1000 / 60);
