
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball ;
var ground;
var leftSide;
var rightSide;
function preload()
{

}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
  world = engine.world;
var ball_options={
	isStatic:false,
	restitution:0.95,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Bodies.circle(200,100,20,ball_options)
	ground = new Ground(width/2,600,width,20)

	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1400,600,20,120)

	World.add(world,ball);

	Engine.run(engine);
}


function draw() {
	background(0);
	ellipse(ball.position.x,ball.position.y,20)
ground.show()
leftSide.show()
rightSide.show()
  rectMode(CENTER);
  
 
}
function keyPressed() {
if (keyCode === UP_ARROW ) {
	horizontalforce()
}
}
function horizontalforce(){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
  }

