function setup() {
  createCanvas(windowWidth, windowHeight);
}
 



noStroke();


function draw() {
  
  background(220);
  let a = mouseY;
  fill(0, 10);
  for (let x = 0; x < width; x += 40) {
    for (let y = 20; y < height; y += 40) {
      circle(x, y, a);
    }
  }
}