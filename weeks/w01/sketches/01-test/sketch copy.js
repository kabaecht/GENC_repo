function setup() {
  createCanvas(windowWidth, windowHeight)
}

let x = 100
let y = 100


function draw() {
  background(255, 255, 255)
fill(0, 0, 0)
for (let y = 0; y < height; y += 30) {
  for (let x = 0; x < width; x += 30) {
    rect  (x, y, 25);
    circle (width /2, height / 2 , 500);
  }
}
}
