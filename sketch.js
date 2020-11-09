const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var box1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(100,200,50,50);
  box2 = new Box(125,90,50,50);
  ground=new Ground(200,390,400,20);
}

function draw() {
  background(0);
  Engine.update(engine)
 
  box1.display();
  box2.display();
  ground.display();
}