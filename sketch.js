var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 350, 50, 70);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityY=-1;

  bounceRect=createSprite(400,50,50,70);
  bounceRect.velocityY=1;

  movingRect=createSprite(200,200,70,50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
}

function draw() {
  background(255,255,0);  
  movingRect.x= World.mouseX;
  movingRect.y=World.mouseY;

  //console.log(movingRect.x-fixedRect.x)
  //Checking the collision
  /*if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }

  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }*/

  //BounceOff algorithm
  if(bounceRect.x-fixedRect.x<bounceRect.width/2+fixedRect.width/2 &&
    fixedRect.x-bounceRect.x<bounceRect.width/2+fixedRect.width/2)
  {
    bounceRect.velocityX=bounceRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
  }
  if(bounceRect.y-fixedRect.y<bounceRect.height/2+fixedRect.height/2 &&
    fixedRect.y-bounceRect.y<bounceRect.height/2+fixedRect.height/2)
  {
    bounceRect.velocityY=bounceRect.velocityY*(-1);
    fixedRect.velocityY=fixedRect.velocityY*(-1);
  }



  drawSprites();
}