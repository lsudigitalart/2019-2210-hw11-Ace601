var img;
var major = [174, 116, 99, 79, 69]


function preload(){
img = loadImage('tiger.png')

}




function setup(){
createCanvas(800,800);
tint(205, 127); 
 
img.resize(800,800)




}

function draw(){
    
 

 background(0)
image(img,5,-17)
 
fill(250)
for (var i = 0; i < major.length; i++) {
    rect(i * 150 + 95, 727  - major[i], 20, major[i]);



}
//majors
fill(170)
//fill(255)
textSize(18)
text('Business', 7, 730);
//fill(255)
textSize(18);
text('Engineering', 129, 730);
//fill(255)
textSize(22);
text('Education', 276, 730);
//fill(255)
textSize(22);
text('Sciences', 432, 730);
//fill(255)
textSize(16);
text('Communication', 570, 730);

//header

fill(50, 39, 115)
stroke(155)
strokeWeight(3)
textSize(36)
textStyle(BOLD);
text('Five most popular majors for 2018 graduates', 13, 300)

//percentile
fill(250, 187, 45)
noStroke()

//fill(255)
textSize(20)
text('24%', 86, 750);
//fill(255)
textSize(20);
text('16%', 237, 750);
//fill(255)
textSize(22);
text('9%', 390, 750);
//fill(255)
textSize(22);
text('7%', 542, 750);
//fill(255)
textSize(22);
text('6%', 690, 750);

}
