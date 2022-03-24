var runner, runner_1;
var path, pathImg;

function preload(){
  //pre-load images
  runner_1 = loadAnimation("Runner-1.png", "Runner-2.png");

  pathImage = loadImage("path.png");
 
}

function setup(){
  createCanvas(400,400);
  background("black")
  //create sprites here
  
  runner = createSprite(200,180,10,10);
  runner.addAnimation("Running", runner_1);
  runner.scale = 0.3;
  
  path = createSprite(190,200,20,400);
  path.addImage("path", pathImage);
 

  
}

function draw() {
  background(0);


  
drawSprites();
}
