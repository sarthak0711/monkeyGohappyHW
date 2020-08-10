//Global Variables
var stone,stoneImg,backGround,BackImg,monkey,monkeyImg,falseGround,bananaImg;
var bananaGroup,stoneGroup,score;


function preload(){
  stoneImg=loadImage("stone.png")
  backGround=loadImage("jungle.png")
  monkey=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
bananaImg=loadImage("banana.png")

}




function setup() {
  createCanvas(600,300);
  
  BackImg=createSprite(300,150,2000,20000)
  BackImg.addImage("backdrop",backGround)
  BackImg.scale=3
  
  bananaGroup=new Group()
  stoneGroup=new Group()
  
  monkeyImg=createSprite(50,260,10,10)
  monkeyImg.addAnimation("moving",monkey)
  monkeyImg.scale=0.1

  falseGround=createSprite(300,290,600,5)
  falseGround.visible=false
  
  score=0
  
  
}

function draw(){
 background(255); 
  
BackImg.velocityX=-5
  if(BackImg.x<0){
    BackImg.x=BackImg.width/2
  }
  
monkeyImg.collide(falseGround)  
  if(keyDown("space")&&monkeyImg.y>240){
    monkeyImg.velocityY=-12
  }
  monkeyImg.velocityY=monkeyImg.velocityY+0.8
  
  if(monkeyImg.isTouching(bananaGroup)){
    score=score+2
    monkeyImg.scale=monkeyImg.scale+0.01
    bananaGroup.destroyEach()
  }
  
  if(monkeyImg.isTouching(stoneGroup)){
    monkeyImg.scale=monkeyImg.scale-0.015
    stoneGroup.destroyEach()  
  }
  
  
  
  
  bananaSpawn()
  stoneSpawn()
  
  drawSprites()
  
  text("score:"+score,500,30)
  
}

function bananaSpawn(){
  
if(frameCount%120===0){
  var banana=createSprite(600,200,10,10);
  banana.velocityX=-3
  banana.addImage("collect",bananaImg)
  banana.scale=0.05
  banana.lifetime=200
  bananaGroup.add(banana)
 // banana.debug=true
  banana.setCollider("rectangle",0,0,10,10)
}
}

function stoneSpawn(){
  
  if(frameCount%150===0){
    var stone=createSprite(600,260,10,10)
    stone.velocityX=-4
    stone.addImage("obstacle",stoneImg)
    stone.scale=0.1
    stoneGroup.add(stone)
    //stone.debug=true
    stone.setCollider("rectangle",0,0,10,10)
  }
}
    
    
  