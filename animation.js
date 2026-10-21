let gridSize = 100
let cols, rows
function setup() {
  createCanvas(500, 500);
  cols = int(width/gridSize)
  rows = int(height/gridSize)
}

function star(x, y, radius1, radius2, npoints) {
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

function draw() {
  background("#306eb0");
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * gridSize + gridSize/2
      let y = j * gridSize + gridSize/2
      
      noStroke()
      push()
      translate(x, y)
        //face
        push()
        rotate((frameCount*0.005+i+j))
        fill("#F3DFA2")
        
        star(0,0,gridSize*0.25, gridSize*0.4, 5) 
        pop()
      
        //mouth
        push()
        let mouthWidth = map(sin((frameCount*0.05+i+j)), -1, 1, gridSize*0.1, gridSize*0.3)
        noFill()
        stroke("#BB4430")
        strokeWeight(2)
        arc(0,0+gridSize*0.1, mouthWidth, gridSize*0.1, 0, PI)
        pop()
      
        //eyes  
        fill("#315dc4")
        rectMode(CENTER)
        let eyeAngle = map(sin(frameCount*0.1), -1, 1, radians(-60), radians((60)))
        push()
        translate(-gridSize*0.1, -gridSize*0.1)
        ellipse(0,0, gridSize*0.05, gridSize*0.2) // leftE
        pop()
        push()
        translate(+gridSize*0.1, -gridSize*0.1)
        ellipse(0,0, gridSize*0.05, gridSize*0.2) // rightE
        pop()
      pop()
      
    }
    
  }
}