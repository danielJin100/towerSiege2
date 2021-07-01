class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.01
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = random(0,100);
      this.Visibility = 100;
      console.log("success");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      colorMode(HSB,100);
      if(this.body.speed < 10){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke(this.color,100,100);
        fill(0,0,0);
        rect(0, 10, this.width, this.height);
        pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visibility = this.Visibility - 5;
         fill(0,0,0,this.Visibility);
         stroke(this.color,100,100,this.Visibility);
         rect(this.body.position.x, this.body.position.y+10, 50, 50);
         pop();
       }
      
    }
  };