const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand1,stand2;
var strikerIMG;
var player;

function preload(){
 
  
}

function setup() {
  createCanvas(1300,800);
  engine = Engine.create();
  world = engine.world;
 ground = new Ground(750,790,1390,20);
 
striker = new Striker(1000,400,30,40);
//men on ground
man1 = new Man(700,750,100,100);
man2 = new Man(697,750,100,100);
man6 = new Man(720,750,50,50);
//men on stands
stand1 = new Ground(950,600,90,10);
man3 = new Man(950,597,100,100);
stand2 = new Ground(695,653,90,10);
man4 = new Man(695,650,50,50);
stand3 = new Ground(800,550,90,10);
man5 = new Man(800,549,50,50);
//obstacle
obstacle1 = new Ground(850,580,80,10);
obstacle2 = new Ground(600,550,10,20);

sling = new SlingShot(striker.body,{x:200,y:500})
}

function draw() {
  background("green"); 
  Engine.update(engine); 
  ground.display();
  striker.display();
  sling.display();
  man1.display();
  man2.display();
  man3.display();
  stand1.display();
  man4.display();
  stand2.display();
  stand3.display();
  man5.display();
  man6.display();
  obstacle1.display();
  obstacle2.display();
}

function mouseDragged(){
  Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}