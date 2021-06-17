
var fixedRect, movingRect , fixedRect1,fixedRect2;
var gameObject1, gameObject2;


function setup() {
  createCanvas(1200,800);
 
 //console.log(debug);
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(500, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  
  fixedRect1 = createSprite(500, 300, 50, 50);
  fixedRect1.shapeColor = "green"; 

  fixedRect2 = createSprite(500, 500, 50, 50);
  fixedRect2.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  }
  else if (isTouching(movingRect,fixedRect1)){
   fixedRect1.shapeColor = "purple";
   movingRect.shapeColor = "purple";
   
  }
  else if (isTouching(movingRect,fixedRect2)){
   fixedRect2.shapeColor = "purple";
   movingRect.shapeColor = "purple";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect1.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect2.shapeColor="green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



