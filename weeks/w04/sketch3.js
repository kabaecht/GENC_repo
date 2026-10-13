function setup() {
  createCanvas(windowWidth, windowHeight);
}
 



noFill();

function draw() {
  background(220);
  let a = mouseY + 1000;
  for (let x = 0; x < width; x += 40) {
    for (let y = 20; y < height; y += 40) {
  circle(x, y, a);
}
}
}