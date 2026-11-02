let waterColor, lightColor
let flowers = []
let speed =2
let scaleValue = 0.05
let dotColor = ['#EEFFD7', '#C9E9BB', '#F4FFEF']
function setup() {
  createCanvas(600, 400);
  // noLoop()
  waterColor = color('#286560')    
  lightColor = color('#EBF8AF') 
  for(let i = 0; i < 100; i++) {
    flowers.push({
      x: random(width),
      y: random(height),
      c: random(dotColor),
      s: random(5, 15)
    })
  }
}

function draw() {
  background(220);
  for(let i = 0; i < width; i+=10) {
    for(let j = 0; j < height; j+=10) {
      noStroke()
      let n = noise((i+1000)*0.01, j*0.05, frameCount*0.005)
      let amt = map(n, 0.3, 0.8, 0, 1, true)
      fill(lerpColor(waterColor, lightColor, amt))
      square(i,j, 10)
    }
  } 

  flowers.forEach(flower => {
    let n = noise(flower.x * scaleValue, flower.y * scaleValue)
    let angle = n * TWO_PI * 2
    flower.x += cos(angle) * speed + random(-2, 2)
    flower.y += sin(angle) * speed + random(-2, 2)
    fill(flower.c)
    circle(flower.x, flower.y, flower.s)
  })
  
 
}

 function mousePressed() {
    for(let i = 0; i < 20; i++) {
      flowers.push({
        x: mouseX,
        y: mouseY,
        c: random(dotColor),
        s: random(5, 15)
      })
    }
  }