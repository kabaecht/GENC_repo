function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(255, 255, 255)
  fill(0, 0, 0)

  for (let y = 0; y < height; y += 30) {
    for (let x = 0; x < width; x += 30) {
      let size = 10 + x * 0.05
      rect(x, y, size)
      let column = x / 30
      if (column % 2 === 0) {
  // one state
} else {
  // another state
}
    }
  }
}
