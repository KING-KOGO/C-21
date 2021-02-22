var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  wall=createSprite(800,200,60,150)
  wall.shapeColor="grey"
  car=createSprite(150,200,50,100);
  car.shapeColor="red"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouch(car,wall)){
    car.velocityX=0;
  }

 drawSprites();
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    car.velocityX=10;
  }
}




