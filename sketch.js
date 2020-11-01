
var car;
var mountain;
var fac;
var odometer;

function preload(){
  back_img = loadImage("images/back.jpg");
  car_img = loadImage("images/car.png");
  acc_img = loadImage("images/acc.png");
  mountain_img = loadImage("images/mount.png");
  odometer_img = loadImage("images/odo.png");
  coin_img = loadImage("images/coin.png");

}

function setup() {
  createCanvas( 1870,800);

  mountain = createSprite(width/2,height/2,10,10);
  mountain.addImage("mount", mountain_img);
  mountain.scale = 2.8;

  acc = createSprite(width/2,500);
  acc.addImage("acc",acc_img);
  acc.sclae = 1;

  coin = createSprite(50,50,10,10);
  coin.addImage("coin",coin_img);
  coin.scale = 0.1;
 
  // car = createSprite(100,500,10,10);
  // car.addImage("car",car_img);
  // car.scale = 0.3;

}

function draw() {
  background(back_img);

  // car.velocityX = 0;
  // car.velocityY = 0;

  // if(keyDown(LEFT_ARROW)){
  //   car.velocityX = -10;
  //  }

  // if(keyDown(RIGHT_ARROW)){
  //   car.velocityX = 10;
  //  }

  drawSprites();
  textSize(25);
  fill("black");
  text("C",41,61);

  textSize(40);
  fill("black");
  text("RPM : ",30,110);
  text(" : ",60,61);

}