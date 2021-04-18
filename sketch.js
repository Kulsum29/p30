const Bodies=Matter.Bodies;
const World= Matter.World;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;
var engine,world;
var groundA,groundB;
var border1,border2,border3,border4;
var a1,a2,a3,a4,a5,a6;
var b1,b2,b3,b4,b5,b6;
var polygon,polygonImage;
var launcher;

function preload(){
  polygonImage=loadImage("hexagon.png");
}

function setup() {
  createCanvas(1200,700);
  engine=Engine.create();
  world=engine.world;
  groundA=new Ground(600,400,400,2);
  groundB=new Ground(1000,200,300,2);
  border1=new Ground(600,1,1200,1);
  //border2=new Ground(600,700,1200,1)
  border3= new Ground(0,350,1,700);
  border4=new Ground(1200,350,1,700)
  border1.debug=true
  a1=new Box(600,375,70,50,"red");
  a2=new Box(670,375,70,50,"blue");
  a3=new Box(530,375,70,50,"blue");
  a4=new Box(565,300,70,50,"red");
  a5=new Box(635,300,70,50,"blue");
  a6=new Box(600,270,70,50,"red");
  b1=new Box(1000,170,70,50,"blue");
  b2=new Box(1070,170,70,50,"red");
  b3=new Box(930,170,70,50,"red");
  b4=new Box(970,115,70,50,"red");
  b5=new Box(1040,115,70,50,"blue");
  b6=new Box(1000,70,70,50,"blue");
  polygon=Matter.Bodies.circle(200,110,30,{'restitution':0.8,
  'friction':1.5,'density':1.8},6);
  World.add(world,polygon);
  launcher=new Slingshot(polygon,{x:200,y:110})
}

function draw() {
  background("lemonchiffon"); 
   
  Engine.update(engine);
  groundA.display();
  groundB.display();
  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,60,65)
  //text(mouseX+","+mouseY,mouseX,mouseY);
  launcher.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  launcher.fly();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon, {x: 200 , y: 110});
    launcher.attach(polygon);
  }
}