class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.5,
        'friction':1.5,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    push();
    fill(255);
    stroke("grey");
    strokeWeight(4);
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
