var c = document.getElementById("snakeCanvas");
var ctx = c.getContext("2d");
const WIDTH = 600;
const HEIGHT = 600;
const BODYHIGHT = 15;
const BODYWIDTH = 15;

var socket = io('http://localhost:3000');
socket.on('connect', function () {
  console.log('Connected to Server!')
});
socket.on('event', function (data) {});
socket.on('disconnect', function () {});


ctx.fillStyle = "black";
ctx.fillRect(0, 0, WIDTH, HEIGHT);
ctx.stroke();


socket.on('move', (clients) => {
  console.log(clients);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.stroke();

  for (let c of clients) {
    drawBody(c.snake.body);
  }
  //if (food.x !== null) drawFood();
  //if (gameRunning) move();
  //eat();
  ctx.strokeStyle = "white";
  ctx.font = "30px Verdana";
  ctx.strokeText("score", WIDTH - 50, 50);
});








function drawBody(body) {
  for (let [i, bp] of body.entries()) {
    let {
      x,
      y
    } = bp;

    //ctx.strokeStyle = "red";
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, BODYWIDTH, BODYHIGHT);
    //ctx.stroke();
    if (i === 0) {
      ctx.fillStyle = "green";
      ctx.fillRect(x, y, BODYWIDTH, BODYHIGHT);
    }
  }
}

function drawFood() {
  ctx.strokeStyle = "red";
  ctx.strokeRect(food.x, food.y, BODYHIGHT, BODYWIDTH);
}







document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37: // left
      socket.emit("changeDirection", "left");
      break;
    case 38: // up
      socket.emit("changeDirection", "up");
      break;
    case 39: // right
      socket.emit("changeDirection", "right")
      break;
    case 40: // down
      socket.emit("changeDirection", "down");
      break;
  }
};