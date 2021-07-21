var ship, animation, sea, seaanimation; 

function preload(){
  animation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaanimation = loadAnimation("sea.png");

}

function setup(){
  createCanvas(600,200);
  
  sea = createSprite(300,100);
  ship = createSprite(100,100);
  sea.scale = 0.2;
  ship.addAnimation("moving", animation);
  ship.scale = 0.2;
  sea.addAnimation("ocean", seaanimation);
}

function draw() {
  
  background("blue");
  sea.velocityX = -2;

  if(sea.x < 200){
    sea.x = 300;
  }
  
 
  drawSprites();
}