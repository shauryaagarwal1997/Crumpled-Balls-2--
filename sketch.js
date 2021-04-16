const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var paper;
var ground;
var dustbinImg;

function preload(){
	
}
function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinImg=loadImage("sprites/dustbin.png");

	

	paper=new Paper(100,530,50);
	box1=new Dustbin(1500,605,250,20);
	box2=new Dustbin(1380,540,10,150);
	box3=new Dustbin(1620,540,10,150);
	ground=new Ground(900,620,1800,15);

	Engine.run(engine);
  
}


function draw() {
  background("lightpink");
 
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 paper.display();
 
 imageMode(CENTER)
 image(dustbinImg,1500,530,300,170) 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.paper,paper.paper.position,{x:800,y:-550})
	}
}