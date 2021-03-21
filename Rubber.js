class rubber{
	constructor(x,y,r)
	{
	var options = {
      restitution:0.3,
	  friction:5,
	  density:1

	}
		this.x=250;
		this.y=100;
		this.r=50
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.r,this.r)
			pop()
	}

}