const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var object1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);
    var Option = {
    restitution:1.0
    }
  
    object1 = Bodies.circle(200,200,30,Option);
  World.add(world,object1) 


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS)
    rect(object.position.x,object.position.y,400,20);
    ellipse(object1.position.x,object1.position.y,20,20);
}
