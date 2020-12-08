class Box{
    constructor(x,y,w,h){
        var options={
            restitution:1.0,
            friction:1.0,
            density:1.0

        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        World.add(ourWorld,this.body);
        this.width= w;
        this.height=h;
      
    }
    display(){
        push();
        var pos= this.body.position;
        var angle= this.body.angle;
        fill("red");
        stroke("blue");
        strokeWeight(4)
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}