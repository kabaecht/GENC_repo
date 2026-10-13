function setup() {
  createCanvas(windowWidth, windowHeight);
}
 



noFill();

function draw() {
  background(220);
  let a = mouseY;
  for (let x = 0; x < width; x += 40) {
    for (let y = 20; y < height; y += 40) {
      fill (255, 0, 100);
  rect(x, y, 100);
  rotate(0.05 / a);
}
}
}