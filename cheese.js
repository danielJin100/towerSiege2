class Cheese{
    constructor(x, y, radius) {
        var options = {
            'restitution':1,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x, y, radius*2-15, options);
        this.angle = 0;
        Matter.Body.setAngle(this.body,0);
        World.add(world, this.body);
        this.image = loadImage("polygon.png");
      }
      display(){
        var angle = 0;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
      }
}