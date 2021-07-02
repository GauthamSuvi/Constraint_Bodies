const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ball1;
var ground;
var con;
var con1;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  ball = Bodies.circle(200,100,10,ball_options);
  World.add(world,ball);
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:100},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);
      
  //ball1, creating a new ball
  ball1 = Bodies.circle(200,350,10,ball_options);
  World.add(world,ball1);

  con1 = Matter.Constraint.create({
    bodyA:ball,
    pointA:{x:0,y:0},
    bodyB:ball1,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });
  World.add(world,con1)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball1.position.x,ball1.position.y,10);

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball1.position.x,ball1.position.y);
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0.05});
    }
}

