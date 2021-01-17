var tom_running,tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerry_teasing,jerryImg3;
var bg,bgImage,tom;

function preload() {
    bgImage=loadImage("garden.png");

    tomImg1= loadImage("tomOne.png");
    tomImg2=loadAnimation("tomTwo.png","tomThree.png");
    tomImg3= loadImage("tomFour.png");

    jerryImg1=loadImage("jerryOne.png");
    jerryImg2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg3=loadImage("jerryFour.png");
}

function setup(){
    createCanvas(980,650);

    //create tom and jerry sprites here
    bg=createSprite(490,300,800,500);
    bg.addImage(bgImage);
    bg.scale=1;

    tom=createSprite(750,520,20,40);
    tom.addImage(tomImg1);
    tom.scale=0.1;

    jerry=createSprite(100,520,20,40);
    jerry.addImage(jerryImg1);
    jerry.scale=0.1;
}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide
    
    tom.debug=true;
    tom.setCollider("rectangle",50,20);
    jerry.setCollider("rectangle",50,20);
    
    keyPressed();

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
       tom.addAnimation("stop",tomImg3)
       tom.changeAnimation("stop")
       tom.velocityX=0

       jerry.addAnimation("stop",jerryImg3)
       jerry.changeAnimation("stop")
    }

    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyCode===LEFT_ARROW)
  {
      tom.addAnimation("running",tomImg2);
      tom.changeAnimation("running")
      tom.velocityX=-4
    
      jerry.addAnimation("teasing",jerryImg2);
      jerry.changeAnimation("teasing");
  }
}
