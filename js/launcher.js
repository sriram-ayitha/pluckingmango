class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:1
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        this.bodyA=bodyA
        this.pointB=pointB
    }
    display(){
        if(this.rope.bodyA){
            var pointA=this.bodyA.position
            var pointB=this.pointB
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    fly(){
        this.rope.bodyA=null
    }
    attach(body){
        this.rope.bodyA=body
    }
}