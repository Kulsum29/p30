class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.Slingshot = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.Slingshot);
    }

    display(){
        if(this.Slingshot.bodyA ){
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        push();
        stroke("hotpink")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    
    }
    fly(){
        this.Slingshot.bodyA=null;
        //null means nothing
    }
    attach(body){
        this.Slingshot.bodyA=body;
    }
}