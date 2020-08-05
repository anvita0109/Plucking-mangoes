
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var img, img2;

function preload()
{
	img = loadImage("Sprites/tree.png");
	img2 = loadImage("Sprites/boy.png");
}

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 550, 1300, 20);
	
	tree = createSprite(900, 300, 400, 300);
	tree.addImage(img)
	tree.scale = 0.35;

	boy = createSprite(200, 450, 20, 10);
	boy.addImage(img2);
	boy.scale = 0.15;

	mango1 = new Mango(1000,200, 60, 50);
	mango2 = new Mango(850, 250, 40, 50);
	mango3 = new Mango(900, 190, 70, 60);
	mango4 = new Mango(1000,150, 30, 20);
	mango5 = new Mango(800, 220, 40, 20);
	mango6 = new Mango(980, 300, 50, 60);
	mango7 = new Mango(1050,220, 40, 40);


	stone = new Stone(100, 500, 50, 50);


	slingShot = new SlingShot(stone.body,{x:110, y:370});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(205,205,205);
  
  drawSprites();



  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone.display();

  slingShot.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});

}

function mouseReleased(){

    slingShot.fly();

}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= lmango.r+lstone.r){
		Matter.body.setStatic(lmango.body, false);
	}

}


