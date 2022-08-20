const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var box;
var ground;

function setup(){
  createCanvas(500,500);

  engine = Engine.create()
  world = engine.world;

  var box_options = {
    restitution: 0.8,
    density: 0.2
  }

  box = Bodies.rectangle(250, 250, 50, 50, box_options);
  World.add(world, box);  

  var options={
    isStatic: true,
  }

  ground = Bodies.rectangle(250, 490, 500, 20, options);
  World.add(world, ground)
}

function draw(){
  background(0);
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(box.position.x, box.position.y, 50, 50);

  rect(ground.position.x, ground.position.y, 500, 20);
}
