let circleNumSlider
let circleGapSlider
let circleColorPicker
let fromColorPicker
let toColorPicker
let lineSpinSlider
let line1StrokeWeightSlider
function setup(){
    createCanvas(400, 400);
    noFill()
    strokeWeight(10)
    createP("circle")
    createElement ("label", "num")
    circleNumSlider = createSlider(1, 10, 3);
    createElement ("label", "gap")
    circleGapSlider = createSlider(50, 150, 50, 20);
    circleColorPicker = createColorPicker('#2f58c2')
    fromColorPicker = createColorPicker('#40a38f')
    toColorPicker = createColorPicker('#3d270a')
   
    //lines 1
    createP("lines 1")
    lines1NumSlider = createSlider(1, 10, 5);
    lines1LenSlider = createSlider(50, 150, 100, 20);
    lines1DistSlider = createSlider(50, 150, 100, 20);
    lines1ColorPicker = createColorPicker('#c2962f')
    lines1SpinSlider = createSlider(0, 360, 50);
    line1StrokeWeightSlider = createSlider(1, 15, 8);
    showLines1Checkbox = createCheckbox("show lines 1", true);


     //lines 2
    createP("lines 2")
    lines2NumSlider = createSlider(1, 10, 5);
    lines2LenSlider = createSlider(50, 150, 100, 20);
    lines2DistSlider = createSlider(50, 150, 100, 20);
    lines2ColorPicker = createColorPicker('#143b40')
    lines2SpinSlider = createSlider(0, 360, 50);
    line2StrokeWeightSlider = createSlider(1, 15, 8);
    

}

function draw(){
    background(220);
    translate(width/2, height/2);
    drawCirles();
    if(showLines1Checkbox.checked()){
        drawLines1();
    }
    // if(showLines2Checkbox.checked()){
        drawLines2();
    // }
}

function drawLines1(){
    let num = lines1NumSlider.value()
    let len = lines1LenSlider.value()
    for(let i = 0; i < num; i++) {
    push()
    stroke(lines1ColorPicker.value())
    strokeWeight(line1StrokeWeightSlider.value())
    rotate(i/num * TWO_PI)
    translate(lines1DistSlider.value(), 0) //distance from center
    rotate(radians(lines1SpinSlider.value()))
    line(-len/2, 0, len/2, 0)
    pop()
    }
}

function drawLines2(){
    let num = lines2NumSlider.value()
    let len = lines2LenSlider.value()
    for(let i = 0; i < num; i++) {
    push()
    stroke(lines2ColorPicker.value())
    strokeWeight(line2StrokeWeightSlider.value())
    rotate(i/num * TWO_PI)
    translate(lines2DistSlider.value(), 0) //distance from center
    rotate(-radians(lines2SpinSlider.value()))
    line(-len/2, 0, len/2, 0)
    pop()
    }
}



function drawCirles(){
    let num = circleNumSlider.value()
    let gap = circleGapSlider.value()
    let from = color(fromColorPicker.value())
    let to = color(toColorPicker.value())
    for(let i = 0; i < num; i++){
        push()
        stroke(lerpColor(from, to, i/num))
        circle(0, 0, (i+1) * gap);
        pop()
    }
}
