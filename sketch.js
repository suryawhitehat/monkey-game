
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground,invisibleGround;
var score=0;
var Survival_Time=0 ;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
 ground = createSprite(40,350,900,10);
  ground.velocityX = -5;
 ground.x = ground.width /2;
    
  //invisibleGround = createSprite(200,190,400,10);
 // invisibleGround.visible = false;
  
 bananaGroup = new Group();
  obstaclesGroup = new Group()
}


function draw() {
background ("white");
     if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& monkey.y > 161) {
        monkey.velocityY = -12;

    }
  monkey.velocityY = monkey.velocityY + 0.8
    
 
 


    monkey.collide(ground);
   Banana();
  spawnObstacles();  
  drawSprites();
   stroke("white");
  textSize(20);
  fill("white");
  text("Score "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  Survival_Time=Math.ceil(frameCount/getFrameRate());
  text("Survival Time = "+ Survival_Time,100,50);
  Banana();
  spawnObstacles();    
     
 
  
  
}
function Banana(){
  if(frameCount % 80 ===0){
    banana = createSprite(400,120);
    banana.y = Math.round(random(120,200  ));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.addLifetime = 150;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth+1;
    bananaGroup.  add(banana);
    
  }
  
  
}


function spawnObstacles(){
 if (frameCount % 300 === 0){
    obstacle = createSprite(400,330,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;
   
          
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
 
    obstaclesGroup.add(obstacle);
 }
}





