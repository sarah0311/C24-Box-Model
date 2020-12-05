class Log{
    constructor(x,y,height,angle){
        var log_options = {
            restitution: 0.5,
            friction: 1.5,
            density: 1
        }

        this.width = 20;
        this.height = height;

        this.body = Bodies.rectangle(x,y,20,height,log_options);
        World.add(world,this.body);

        Matter.Body.setAngle(this.body,angle);
    }

    display(){
        var pos = this.body.position;

        push();
        fill("brown");
        stroke("pink")
        strokeWeight(4);
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

}