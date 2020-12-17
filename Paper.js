class Paper{
    constructor(x,y,r){
        var options={
            'restitution':0.3,
            'friction':0.5,
            'density':1.6,
            isStatic:false
        }
        this.body =Matter.Bodies.circle(x,y,r/2,options);
        this.radius=r;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        ellipse(0,0,this.radius);
        pop();
    }
}