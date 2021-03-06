var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillRect(x, y, width, height);
// c.fillStyle = 'rgba(255, 0, 0, 0.5)'
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(55, 50, 0, 0.5)'
// c.fillRect(300, 100, 100, 100);
// c.fillRect(500, 100, 100, 100);
// console.log(canvas);

// Line
// c.beginPath();
// c.moveTo(300, 100);
// c.lineTo(400, 200);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// Arc / circle
// c.arc(x:int, y:int, r: int,
//   startAngle: float, endAanle: float,
//   drawCounterClockwise: Boll (false));
// c.beginPath();
// c.arc(200, 300, 50,
//   0, Math.PI * 2,(false));
// c.stroke();

// for (var i = 0; i < 3; i++) {
//   console.log(this);
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();
// }


// 애니메이션

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    // c.fill();
  }
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}


var circleArray = [];

for (var i = 0; i < 100; i++) {
  var radius = 30;
  var x = Math.random() * (innerWidth - radius *2) + radius;
  var y = Math.random() * (innerHeight - radius *2) + radius;
  // dx, dy는 속도를 조절함
  var dx = (Math.random() - 0.5)*8;
  var dy = (Math.random() - 0.5)*8;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

    // c.beginPath();
    // c.arc(x, y, radius, 0, Math.PI * 2, false);
    // c.strokeStyle = 'blue';
    // c.stroke();
    
    // if (x + radius > innerWidth || x - radius < 0) {
    //   dx = -dx;
    // }
    // if (y + radius > innerHeight || y - radius < 0) {
    //   dy = -dy;
    // }

    // x += dx;
    // y += dy;
  }

  animate();