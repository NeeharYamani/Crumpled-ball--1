
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var edge1,edge2,bottom;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(800,height,1600,30)
    dustbin = new dustbin(1200,680);
    paper = new Ball(200,450,40);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  paper.display();
  drawSprites();
  
  
}
function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}



