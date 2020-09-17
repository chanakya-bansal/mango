var g,Mimage,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10,boy,boyI,tree,treeI,test

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
 g=loadImage("pine_trees.png")	
 Mimage=loadImage("mango.png")
 boyI=loadImage("boy.png")
 treeI=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);

	tree=createSprite(625,425,10,10)
	tree.addImage(treeI)
	tree.scale=0.45


    M1=createSprite(200,200,10,10)
	M1.addImage(Mimage)
	M1.scale=0.125
	M2=createSprite(200,200,10,10)
	M2.addImage(Mimage)
	M2.scale=0.125
	M3=createSprite(200,200,10,10)
	M3.addImage(Mimage)
	M3.scale=0.125
	M4=createSprite(200,200,10,10)
	M4.addImage(Mimage)
	M4.scale=0.125
	M5=createSprite(200,200,10,10)
	M5.addImage(Mimage)
	M5.scale=0.125
	M6=createSprite(200,200,10,10)
	M6.addImage(Mimage)
	M6.scale=0.125
	M7=createSprite(200,200,10,10)
	M7.addImage(Mimage)
	M7.scale=0.125

	M8=createSprite(200,200,10,10)
	M8.addImage(Mimage)
	M8.scale=0.08
	M9=createSprite(200,200,10,10)
	M9.addImage(Mimage)
	M9.scale=0.08
	M10=createSprite(200,200,10,10)
	M10.addImage(Mimage)
	M10.scale=0.08

	boy=createSprite(175,600,10,10)
    boy.addImage(boyI)
	boy.scale=0.15

	
	

	engine = Engine.create();
	world = engine.world;

	

	ground=new Ground(width/2,690,width,30)
	
	m1=new Mango(650,300)
	m2=new Mango(700,250)
	m3=new Mango(500,350)
	m4=new Mango(570,275)
	m5=new Mango(775,350)
	m6=new Mango(750,300)
	m7=new Mango(570,400)

	m8=new Mango(590,325)
	m9=new Mango(630,200)
	m10=new Mango(690,325)


	stone=new Stone(100,600)

	hand=new Throw(stone.body,{x:100,y:520})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(g);

 M1.x=m1.body.position.x
 M1.y=m1.body.position.y
 M2.x=m2.body.position.x
 M2.y=m2.body.position.y
 M3.x=m3.body.position.x
 M3.y=m3.body.position.y
 M4.x=m4.body.position.x
 M4.y=m4.body.position.y
 M5.x=m5.body.position.x
 M5.y=m5.body.position.y
 M6.x=m6.body.position.x
 M6.y=m6.body.position.y
 M7.x=m7.body.position.x
 M7.y=m7.body.position.y
 M8.x=m8.body.position.x
 M8.y=m8.body.position.y
 M9.x=m9.body.position.x
 M9.y=m9.body.position.y
 M10.x=m10.body.position.x
 M10.y=m10.body.position.y



 
 detectCollision(stone,m1)
 detectCollision(stone,m2)
 detectCollision(stone,m3)
 detectCollision(stone,m4)
 detectCollision(stone,m5)
 detectCollision(stone,m6)
 detectCollision(stone,m7)
 detectCollision(stone,m8)
 detectCollision(stone,m9)
 detectCollision(stone,m10)
 

	ground.display()
	m1.display()
	m2.display()
	m3.display()
	m4.display()
	m5.display()
	m6.display()
	m7.display()
	m8.display()
	m9.display()
	m10.display()
	drawSprites();
	stone.display()
	hand.display()

 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})


}

function mouseReleased(){
   hand.fly()

}



function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:600})
		hand.attach()
	}
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Imango.body,false)
	}
}