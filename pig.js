class Pig{
    constructor(x,y){
        var pig_options = {
            restitution: 1,
            friction: 0.5,
            density: 1
        }

        this.width = 50;
        this.height = 50;

        this.body = Bodies.rectangle(x,y,50,50,pig_options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        push();
        fill("green");
        stroke("darkgreen");
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        strokeWeight(4);
        rect(0,0,this.width,this.height);
        pop();
    }
}