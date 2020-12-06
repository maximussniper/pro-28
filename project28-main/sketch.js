
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var tree, stoneObj,groundObj, launcherObj;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

function preload(){
  boy=loadImage("images/boy.png");
  bgI=loadImage("images/bg.jpg");
  treeI=loadImage("images/tree.png")	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  groundObj=new ground();

	stoneObj=new stone(235,420,60); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	launcherObj=new launcher(stoneObj.body,{x:235,y:420})


}

function draw() {

  Engine.update(engine);

  imageMode(CENTER);
  image(bgI,650,300,1300,600);
  image(treeI, 1000,300,650, 650)	
  image(boy ,300,480,200,300);
  
  textSize(25);
  fill("purple");
  text("Press Space to get a second Chance to Play!!",50 ,50);
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();

  groundObj.display();
  launcherObj.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObj.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObj.attach(stoneObj.body);
	}
  }

  function detectollision(s,m){

  mPos=m.body.position
  sPos=s.body.position
  
  var distance=dist(sPos.x, sPos.y, mPos.x, mPos.y)
 
  	if(distance<=m.r+s.r)
    {
  	  Matter.Body.setStatic(m.body,false);
    }

  }