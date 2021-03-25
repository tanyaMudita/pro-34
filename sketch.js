const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world ;
var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13box14,box15;
var sling, ball;

function setup() {
  var canvas= createCanvas(1200,800);
   
  engine=Engine.create();
  world=engine.world; 

  ground=new Ground(600,770,1200,20);

  box1=new Box(800,710,60,80);
  box2=new Box(860,710,60,80);
  box3=new Box(920,710,60,80);
  box4=new Box(980,710,60,80);
  box5=new Box(1040,710,60,80);

  box6=new Box(830,630,60,80);
  box7=new Box(890,630,60,80);
  box8=new Box(950,630,60,80);
  box9=new Box(1010,630,60,80);

  box10=new Box(860,550,60,80);
  box11=new Box(920,550,60,80);
  box12=new Box(980,550,60,80);

  box13=new Box(890,470,60,80);
  box14=new Box(950,470,60,80);

  box15=new Box(920,390,60,80);

  ball=new Ball(300,650);
  sling=new Rope(ball.body,{x:300,y:600});

}

function draw() {
  background("cyan");
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display(); 
  box13.display();
  box14.display();
  box15.display();
  
  ball.display();
  
  sling.display();
  
  drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

  sling.fly();

}



function keyPressed(){
  if(keyCode === 32 && ball.body.speed<1){
      sling.attach(ball.body);
      Matter.Body.setPosition(ball.body,{x:300,y:650});
  }
}