class ground
{
	constructor()
	{
		var options={
			isStatic:true			
			}
	
		this.body=Bodies.rectangle(650, 585, 1300, 30 , options);
 		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			rectMode(CENTER);
			fill(120,200,0);
			noStroke();
			rect(pos.x,pos.y,1300,30);			
	}

}