class Mango{
  constructor(x, y, radius) {
    var options = {
        isStatic: true,
        restitution: 0,
        friction: 1
    }
    this.body = Bodies.circle(x, y, radius/2, options);
    this.image = loadImage("Sprites/mango.png")
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   push();
    translate(pos.x, pos.y)
    fill(205,205,205);
    stroke(205,205,205);
    strokeWeight(2);
    ellipseMode(CENTER)
    ellipse(pos.x, pos.y, this.radius, this.radius);
    imageMode(CENTER)
    image(this.image, 0, 0, this.radius, this.radius)
    pop();
  }

    
}