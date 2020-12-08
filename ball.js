class Ball{
    constructor(x,y,r){
        var options={
            restitution:1.0,
            friction:1.0,
            density:1.0

        }
        this.body= Bodies.circle(x,y,r,options);
        World.add(ourWorld,this.body);
        this.radius= r;
      
    }
    display(){
        push();
        var pos= this.body.position;
        var angle= this.body.angle;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}