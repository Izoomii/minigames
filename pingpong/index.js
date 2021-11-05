//const p5 = require("./p5/p5");
//const p5js = require("p5")
console.log("hello");

//X and Y of canvas respectively
let canvas = [800, 400];

let circleDiam = 15;
let circleRadius = circleDiam / 2;
let circleX = 20;
let circleY = 20;
let speedX = 6; //Math.floor(Math.random() * 10 + 4);
let speedY = 6; //Math.floor(Math.random() * 10 + 4);

let rectMoveSpeed = 7;
let rectLength = 40;
let rectwidth = 5;

let rect1X = 20;
let rect1Y = canvas[1] / 2;

let rect2X = canvas[0] - 40;
let rect2Y = canvas[1] / 2;

function setup() {
  createCanvas(canvas[0], canvas[1]);
  frameRate(30);
}

//main
function draw() {
  background(220);

  //function execution
  move(speedX, speedY);
  bounce();

  circle(circleX, circleY, circleDiam);

  //speed adjustements
  //+ key codes
  if (keyIsDown(107) || keyIsDown(187)) {
    speedX *= 1.02;
    speedY *= 1.02;
  }
  //- key codes
  if (keyIsDown(109) || keyIsDown(189)) {
    speedX /= 1.02;
    speedY /= 1.02;
  }

  //rect1, the one on the left
  rect(rect1X, rect1Y, rectwidth, rectLength);

  if (!(rect1Y <= 0) && keyIsDown(87)) {
    rect1Y -= rectMoveSpeed;
  } else if (!(rect1Y >= canvas[1] - rectLength) && keyIsDown(83)) {
    rect1Y += rectMoveSpeed;
  }

  //rect2, the one on the right
  rect(rect2X, rect2Y, rectwidth, rectLength);

  if (!(rect2Y <= 0) && keyIsDown(38)) {
    rect2Y -= rectMoveSpeed;
  } else if (!(rect2Y >= canvas[1] - rectLength) && keyIsDown(40)) {
    rect2Y += rectMoveSpeed;
  }
}

//w 87 // s 83 // uparrow 38 // downarrow 40

//functions
const move = (Xspeed, Yspeed) => {
  circleX += Xspeed;
  circleY += Yspeed;
};
const bounce = () => {
  //minor problem of ball bouncing back before resetting if its Y axis is the same as the one of the rectangle close to it
  if (circleX < circleRadius + 2 || circleX > canvas[0] + 2) {
    //speedX *= -1;
    console.log("Off area");
    setTimeout(() => {
      circleX = canvas[0] / 2;
      circleY = canvas[1] / 2;
      console.log("resetting ball");
    }, 400);
  }
  if (circleY <= circleRadius || circleY >= canvas[1] - circleRadius) {
    speedY *= -1;
    console.log("Bounced off Y axis");
  }

  if (circleX - circleDiam <= rect1X) {
    if (circleY >= rect1Y && circleY <= rect1Y + rectLength) {
      speedX *= -1;
      console.log("Collision with left rect");
    }
  }

  if (circleX + circleRadius >= rect2X) {
    if (circleY >= rect2Y && circleY <= rect2Y + rectLength) {
      speedX *= -1;
      console.log("Collision with right rect");
    }
  }
};
