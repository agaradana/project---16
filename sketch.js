
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");


}



function setup() {
  createCanvas(450,400);

  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale= 0.15 ;
 
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  FoodGroup = new Group();
  ObstacleGroup = new Group();

}



function draw() {
  
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/60) 
  text("Survival Time: "+ survivalTime, 100,50);
}
  function spawnFood() {
      if (frameCount % 80 === 0) {
     banana = createSprite(450,250,40,10);
     banana.y = random(120,200);  
     banana.velocityX = -5;
    
    
     banana.lifetime = 300;
     
    
    
     banana.addImage(bananaImage);
     banana.scale=0.1;
    
     FoodGroup.add(banana);
    }
    
 }
    
   function spawnObstacles() {
      if (frameCount % 300 === 0) {
     obstacle = createSprite(450,330,40,10);
    obstacle.velocityX = -2;
    
    
     obstacle.lifetime = 225;
    
    
     obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    
     ObstacleGroup.add(obstacle);
    }
    
 }  







