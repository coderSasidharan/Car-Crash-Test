var car, wall
var speed, weight

function setup() {
  createCanvas(1200,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor="white";
  wall = createSprite(1100,200,30,height/2);
  wall.shapeColor="Maroon";
  speed = random(55,90)
  weight = random(400,1500)
  car.velocityX = speed;
}

function draw() {
  background(0);  

  textSize(30);
  fill("white");
  text("Crash Test",550,40);

  textSize(20);
  fill("blue");
  text("Speed:"+round(speed)+"kmph",450,90);

  fill("purple");
  text("Mass:"+round(weight)+"kg",650,90);

  crashCar();

  drawSprites();
}

function crashCar() {
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509
    if(deformation>180){
      car.shapeColor=color(255,0,0);
      textSize(100);
      fill("red");
      text("Fail",450,250);
    }else if(deformation<180&&deformation>100){
      car.shapeColor=color(230,230,0);
      textSize(100);
      fill("yellow");
      text("Good",450,250);
    }else if(deformation<100){
      car.shapeColor=color(0,255,0);
      textSize(100);
      fill("green");
      text("Excellent",400,250);
    }

  }

}