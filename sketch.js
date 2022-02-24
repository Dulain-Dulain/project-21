
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		restitution:0.3,friction:0,density:1.2,isStatic:false
	}
 ball=Bodies.circle(200,100,20,options)
World.add(world,ball)
ground = new Ground (800,670,1600,20)
left_wall=new Ground(1100,600,20,120)	
right_wall=new Ground(1350,600,20,120)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill(255)
  ellipse(ball.position.x,ball.position.y,40,40)
  ground.display()
 left_wall.display()
 right_wall.display()
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


