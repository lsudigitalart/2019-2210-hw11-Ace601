
var major = [174, 116, 99, 79, 69]
var img;

function preload(){
img = loadImage("tiger.png")

}




function setup(){
createCanvas(800,800);

 
}

function draw(){
    tint(255, 127); 
image(img,0,0) 

   background(0)

 

for (var i = 0; i < major.length; i++) {
    rect(i * 150 + 90, 725  - major[i], 20, major[i]);



}
//majors
fill(255)
textSize(20)
text('Business', 4, 730);
fill(255)
textSize(20);
text('Engineering', 124, 730);
fill(255)
textSize(22);
text('Education', 276, 730);
fill(255)
textSize(22);
text('Sciences', 432, 730);
fill(255)
textSize(16);
text('Communication', 570, 730);

//header

fill(255)
textSize(32)
text('Five most popular majors for 2018 graduates', 90, 300)

//percentile

fill(255)
textSize(20)
text('', 4, 730);
fill(255)
textSize(20);
text('', 124, 730);
fill(255)
textSize(22);
text('', 276, 730);
fill(255)
textSize(22);
text('', 432, 730);
fill(255)
textSize(16);
text('', 570, 730);

}
