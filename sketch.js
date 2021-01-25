
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(650,200,70,70);
	ground = new Ground(400,700,800,20);
	stone = new Stone(400,500,70,100);
	rubber = new Rubber(600,300,100,60);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  hammer.display();

  ground.display();
  
  rubber.display();

  stone.display();
  drawSprites();
 
}



