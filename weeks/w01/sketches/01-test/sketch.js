function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(200, 200, 200)
  noFill()
  strokeWeight(50)
  circle(0, 200, 400,)
    circle(200, 0, 400,)
    circle(200, 0, 400,)
    circle(400, 200, 400,)
    circle(200, 400, 400,)

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
