var path,pathImg;
var jaxon,runner_Jaxon;
var invis1,invis2;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runner_Jaxon = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(305, 700);
  //create sprites here
  path = createSprite(150, 200);
  path.addImage("Moving",pathImg);
  path.y = path.height /2;
  path.velocityY = 4;

  jaxon = createSprite(200, 600, 20, 20);
  jaxon.addAnimation("Running",runner_Jaxon);
  jaxon.scale = 0.07;

  invis1 = createSprite(305, 600, 10, 100);
  invis1.visible =  false;
  invis2 = createSprite(10, 600, 10, 100);
  invis2.visible =  false;

}

function draw() {
  background("black");

  jaxon.x = World.mouseX;
  
  //code to reset the background
  if (path.y > 400) {
    path.y = height/2;
  }

  jaxon.collide(invis1);
  jaxon.collide(invis2);

  drawSprites();

}
