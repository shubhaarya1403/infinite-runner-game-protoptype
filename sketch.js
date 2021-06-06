

var elephant, elephant_running, elephant_collided;



var obstacle;
var backgroundImg, background;
var jumpSound, collidedSound;

function preload(){
  
  backImg = loadImage("assets/Forest_bg.jpg")
  
  elephant_running = loadAnimation("assets/Elephant_1.png","assets/Elephant_2.png","assets/Elephant_3.png");
  elephant_collided = loadAnimation("assets/Elephant_4.png");
  
  obstacle = loadImage("assets/Obstacle.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImg);
  backgr.scale=3;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  elephant = createSprite(100,340,20,50);
  
  
  elephant.addAnimation("running", elephant_running);
  elephant.addAnimation("collided", elephant_collided);
  elephant.setCollider('circle',0,0,350)
  //elephant.scale = 0.08
  // elephant.debug=true
  // background=createSprite(200,200,windowWidth,windowHeight);
  // background.addImage(backgroundImg);
  // background.scale=2.5;
  // invisibleGround.visible =false

}

function draw() {
  //elephant.debug = true;
  background(255);
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  

  drawSprites();
}


