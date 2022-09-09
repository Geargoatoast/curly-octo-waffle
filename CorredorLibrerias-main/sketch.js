var BackgroundImg 
var Ikea, IkeaImg
var Almondwater, AlmondwaterImg
var player 

function preload (){
BackgroundImg=loadImage("Background.gif");
IkeaImg=loadImage("mueble.png");
AlmondwaterImg=loadImage("agua_de_almendras.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    Almondwater= createSprite(600,600,20,50);
    Almondwater.addImage(AlmondwaterImg);
    Almondwater.scale=0.5

    Ikea= createSprite(500,1000,20,50);
    Ikea.addImage(IkeaImg);
    Ikea.scale=0.9
    
    player= createSprite(500,1000,20,80);
    player.shapeColor=("black");

}
function draw(){
background(BackgroundImg);
drawSprites();
Text(mouseX,mouseY,"+",mouseX,mouseY)
}   