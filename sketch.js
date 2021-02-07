//giving the variable name and giving the contant
var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//setting the function preload
function preload()
{
	//loading the image of the helicopter and package
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

//setting the function setup
function setup() {
	
	//creating the canvas
	createCanvas(800, 700);

	//setting the rect mode to centre
	rectMode(CENTER);
	
	//craeting, adding the image, scaling and setting the isStatic to false of the package
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//creating, adding and scaling
	helicopterSprite = createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite = {isStatic:true}

	//creating and adding the shape colour to white of the groung
	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//creating the engine
	engine = Engine.create();

	//telling the computer that the word world = engine.world
	world = engine.world;

	//setting the bodt of the package to circle
	packageBody = Bodies.circle(width/2 , 80 , 5 , {restitution:3, isStatic:true});

	//adding the package to the world
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

	//adding the ground to the world
 	World.add(world, ground);

	//making the engine run

	Engine.run(engine);
  
}

function draw() 
{

  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  drawSprites();
 
}


function keyPressed() {

	if (keyCode === DOWN_ARROW) 
	{

	Matter.Body.setStatic (packageBody,false)
	packageBody.restitution = 0.6;
	packageBody.setValocity = -1;

	}

}