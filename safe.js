function detectCollision(bodyA,bodyB){
	stoneBody=bodyA.body.position
	mangoBody=bodyB.body.position

	if(stoneBody.x-mangoBody.x<stoneBody.width/2+mangoBody.width/2 &&
	   mangoBody.x-stoneBody.x<stoneBody.width/2+mangoBody.width/2 &&
	   stoneBody.y-mangoBody.y<stoneBody.height/2+mangoBody.height/2 &&
	   mangoBody.position.y-stoneBody.y<mangoBody.height/2+stoneBody.height/2 ){
		   Matter.Body.setStatic(bodyB.body,false)
		   //to check if the condition is working
		   test=createSprite(200,200,100,100)
	   }
		
 
}