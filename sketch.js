var car,wall;
var no,yes;
function setup() {
  createCanvas(800,400);
  yes=createSprite(400, 200, 50, 50);
  no=createSprite(300,100,60,50);
  car=createSprite(600,400,50,50);
  wall=createSprite(700,400,10,50);
  car.velocityX=2;

}

function draw() {
  background("black");
  
 
  if(isTouching(car,wall)){
  car.bounceOff(wall);
  }
  bounceOff(car,wall);
  drawSprites();
 
}
