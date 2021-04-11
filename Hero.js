class Hero {
  constructor(x,y,width,height)
	{
		var options = { 
			density: 0.5, 
			friction: 1,
			restitution: 0.8,
		}
		this.x=x;
		this.y=y;
		this.width = width;
		this.height = height;
		this.image=loadImage("superhero.png");
		this.body=Bodies.rectangle(this.x, this.y, this.width/2, this.height/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height);
			pop()
			
	}
}
