class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.launcher= Constraint.create(options);
        World.add(world, this.launcher);
    }
    
	attach(body){
		this.launcher.bodyA=body;
	}

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            stroke(135,39,39);
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           
        }
    }
    
}