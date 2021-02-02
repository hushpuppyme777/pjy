var c,w,s,w1
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  car.velocityX=speed
  car.shapeColour="black"
  wall=createSprite(1500,200,60,height/2)
}

function draw() {
  background(255,255,255); 
  if(wall.x-Car.x <(car.width+wall.width)/2)
  {
    car.velocityX=0
    d=0.5*weight*speed*speed/22500
    if(d>180)
    {
      car.shapeColour="red"
    }
    if(d<100)
    {
      car.shapeColour="green"
    } 
    if(d>100&&d<180)
    {
      car.shapeColour="yellow"
    }
  }
  drawSprites();
}