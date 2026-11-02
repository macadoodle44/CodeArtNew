let myData

async function setup() {
  createCanvas(1000, 400);
  myData = await loadJSON('data.json')
  console.log(myData)
}

function draw() {
  background(35, 32, 64);
  for (let i = 0; i < myData.length; i++) {
    let reading = myData[i]
    let x = (i+1) * 100
    let y
    let num = int(map(reading.Hours, 0, 3, 3, 6))

    if (reading.Hours === 0) {
      y = height - height * 0.2 
    } else if (reading.Hours === 1) {
      y = height - height * 0.4 
    } else if (reading.Hours === 2) {
      y = height - height * 0.6
    } else if (reading.Hours === 3) {
      y = height - height * 0.8
    }
    push()
    noStroke()
    fill(242, 208, 121)
    translate(x,y)
    drawStar(0, 0, 20, 40, 5)
    
    pop()

    push()
    drawDots(x, y, reading.Chapters)
    pop()
  }

}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  }

function drawDots(x, y, num) {
  let stemLen = height - y
  let dotSize = [5, 15]
  push()
  translate(x,y)
  stroke(255)
  strokeWeight(3)

  // line(0,0, 0, height-y)
  
  for(let i = 0; i < num; i++) {
    let d = (i+1)/(num+1) * stemLen
    circle(0, d, random(dotSize))
  }
  pop()
  }