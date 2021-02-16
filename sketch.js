var canvas;
var box;
var ground1,ground2,ground3,ground4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ground1 = createSprite(20,550,100,20);
    ground1.shapeColor = "purple";
    
    ground2 = createSprite(130,550,100,20);
    ground2.shapeColor ="magenta";

    ground3.createSprite(240,550,100,20);
    ground3.shapeColor ="blue";

    ground4.createSprite(350,550,100,20);
    ground4.shapeColor ="green";
    
    //create box sprite and give velocity
    box = createSprite(random(200,750));
    box.velocityX = 4;
    box.velocityY = 3;
}

function draw() {
    background("black");
    //create edgeSprite
    music.playSound();
    createEdgeSprites();
    if(ground1.isTouching(box)||box.bounceOff(ground1)){
        box.shapeColor ="purple";
    }    
    if(ground2.isTouching(box)||box.bounceOff(ground2)){
        box.shapeColor ="magenta";
    }  
    if(ground3.isTouching(box)||box.bounceOff(ground3)){
        box.shapeColor ="blue";
    }  
    if(ground4.isTouching(box)||box.bounceOff(ground4)){
        box.shapeColor ="green";
    }  
    
    drawSprites();

}
