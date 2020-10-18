
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b3,b1,b2,g,p

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	g = new Ground (400,690,800,20);
	b1 = new Box (490,630,20,100);
	b2 = new Box (600,670,200,20);
	b3 = new Box (710,630,20,100);
	p = new paper (100,650);
	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(p.body,p.body.position,{x:150,y:-100});
	}
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  g.display();
  b1.display();
  b2.display();
  b3.display();
  p.display();
  drawSprites();
 
}



