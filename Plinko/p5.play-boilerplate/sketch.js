const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var dividers  = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  frameRate(45);

  ground = new Ground(240, 790, 480, 10);

  for(var j=40; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }
  for(var j=15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }
  for(var j=40; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j=15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }
  for( i=0; i <=width; i=i+80){
    dividers.push(new Division(i, 660.5));
  }

  
  /*divider1 = new Division(1, 660.5);
  divider2 = new Division(81, 660.5);
  divider3 = new Division(161, 660.5);
  divider4 = new Division(241, 660.5);
  divider5 = new Division(321, 660.5);
  divider6 = new Division(401, 660.5);
  divider7 = new Division(479, 660.5);

  plinko1 = new Plinko(240, 400);*/
}
function draw() {
  background("black"); 

  ground.display();
  /*plinko1.display();
  divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  divider6.display();
  divider7.display();*/


  if(frameCount%90==0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10));
  }

  for(i=0; i<dividers.length; i++){
    dividers[i].display();
  }
  
  for(j=0; j<particles.length; j++){
    particles[j].display();
  }
  
  
  for(n=0; n<plinkos.length; n++){
    plinkos[n].display();
  }

  Engine.update(engine);
 
  drawSprites();
}