console.log("hello");

let x = 0;

function setup() {
  line(15, 25, 70, 90);
}
function draw() {
  ellipse(x, height / 2, 20, 20);
  x = x + 0.02;
}
