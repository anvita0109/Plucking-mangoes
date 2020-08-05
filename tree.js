class Tree{
    constructor(x,y,width,height){
        var options= {
            isStatic: false,
            restitution: 0,
            friction:1,
            density: 1.2
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height ,options);
        this.image = loadImage("Sprites/tree.png")
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        
        
        fill(205,205,205);
        stroke(205,205,205);
        rectMode(CENTER);
        rect(pos.x, pos.y, 20, 20);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}