class Hammer {
    constructor(x,y,width,height){
        var options = {
            'density':2,
            'friction':1.0,
            'restitution':0.5

        };
        this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("purple");
      fill("yellow");
      rect(0, 0, this.width, this.height); 
      pop();
    }
  };
    
