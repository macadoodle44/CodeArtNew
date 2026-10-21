let gridSize = 50
let cols
let rows
let isGlassesOn = false;

function setup() {
  createCanvas(500, 500);
  cols = int(width/gridSize);
  rows = int(height/gridSize);
}

function draw() {
  background(162, 220, 245);
//making a grid background
  noStroke();
  //generating a grid of circles
  for (let i = 0; i < cols; i++) {
      for (let j=0; j < rows; j++) {

    let x = i * gridSize + gridSize/2;
    let y = j * gridSize + gridSize/2;
    //mapping
    let d = dist(x, y, mouseX, mouseY);

    let circleSize = map(d, 0, 500, gridSize, gridSize*0.5);
    let r = map(d, 0, width, 10, 150);
    let g = map(d, 0, height, 100, 250);
    fill(r, g, 50);
    circle(x, y, circleSize);
  }
  }

//background stars
  // push();
  // translate(width * 0.8, height * 0.5);
  // rotate(frameCount / -100.0);
  // star(0, 0, 30, 70, 5);
  // pop();

  noStroke();
  //back of hair
  fill(171, 141, 85);
  circle(250, 225, 350);
  arc(125, 275, 200, 200, 0, PI/2 + QUARTER_PI, PIE);
  arc(350, 285, 200, 200, 0, PI + QUARTER_PI, PIE);
  //head and ears
  fill(242, 214, 189);
  circle(250, 250, 300);
  ellipse(100, 250, 75, 110);
  ellipse(400, 250, 75, 110);
  fill(171, 141, 85);
  //bangs
  fill(171, 141, 85);
  arc(175, 100, 200, 200, 0, PI/2 + QUARTER_PI, PIE);
  arc(300, 115, 150, 150, 0, PI + QUARTER_PI, PIE);
  circle(300, 100, 50);
  //eyes
  fill(84, 145, 191);
  circle(200, 250, 30);
  circle(300, 250, 30);
  fill(255, 255, 255);
  circle(190, 245, 15);
  circle(290, 245, 15);
  //nose
  fill(230, 142, 112);
  triangle(240, 300, 260, 300, 250, 250);
  //smile
  stroke(230, 142, 112);
  strokeWeight(5);
  noFill();
  arc(250, 325, 100, 50, 0, PI, OPEN);
  //earrings
  stroke(245, 194, 100);
  line(100, 300, 100, 315);
  line(400, 300, 400, 315);
  //glasses
  stroke(105, 74, 31);
  strokeWeight(8);
  noFill();
  rect(140, 215, 100, 75, 10, 20, 40, 40);
  rect(260, 215, 100, 75, 20, 10, 40, 40);
  strokeWeight(5);
  line(245, 245, 260, 245);

  if (isGlassesOn) {
    fill(0, 0, 0, 100);
    rect(140, 215, 100, 75, 10, 20, 40, 40);
    rect(260, 215, 100, 75, 20, 10, 40, 40);
  }
  
}

function mouseClicked() {
  isGlassesOn = !isGlassesOn;
}