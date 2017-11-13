
var font;

function preload(){
  font =  loadFont('AvenirNextLTPro-Demi.otf');
}

function setup(){
    createCanvas(600,400);
    textFont(font);
    textSize(128);
    fill(255);
    noStroke();
    text('Evan Nguyen', 10, 200);
}
function draw(){
  background(51);
}
