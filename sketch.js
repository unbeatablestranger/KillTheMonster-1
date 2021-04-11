const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() 
{
  bg = loadImage("gamingbackground1.jpg");
}

function setup() 
{
  createCanvas(1300, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  roof = new Ground(650, 10, 1300, 20);
  edge = new Ground(10, 350, 20, 650);

  hero = new Hero(550, 500, 260, 190);
  rope = new Rope(hero.body, { x: 550, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(700, 100, 70, 70);

  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(900, 100, 70, 70);

  box8 = new Box(700, 100, 70, 70);
  box9 = new Box(700, 100, 70, 70);
  box10 = new Box(700, 100, 70, 70);
  box11 = new Box(700, 100, 70, 70);
  box12 = new Box(700, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);

  box14 = new Box(800, 100, 70, 70);
  box15 = new Box(800, 100, 70, 70);
  box16 = new Box(800, 100, 70, 70);
  box17 = new Box(800, 100, 70, 70);
  box18 = new Box(800, 100, 70, 70);

 
}

function draw() 
{
  background(bg);
  Engine.update(engine);
  ground.display();

  fill("lightblue");
  box1.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  
  fill("lightpink");
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("yellow");
  box14.display();
  box15.display()
  box16.display();
  box17.display()
  box18.display(); 

  rope.display();
  hero.display();
  monster.display();

  

}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

function keyPressed()
{
  rope.attach(hero.body);
  hero.position.y = 800;
  hero.position.x = 250;
}
