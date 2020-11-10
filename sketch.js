
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var downwall,rightwall,leftwall;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	 
	 ground = createSprite(600,680,1600,20)
	//downwall = createSprite(600,660,200,20)
	//downwall.shapeColor = "red"

	//rightwall = createSprite(690,600,20,100)
	//rightwall.shapeColor = "red"

	//leftwall = createSprite(510,600,20,100)
	//leftwall.shapeColor = "red"
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



