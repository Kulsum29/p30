class Box{
    constructor(x, y, width, height, color) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':0.8
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color=color;
        if(this.color==="red"){
          this.image=loadImage("red.jpg")
        }
        else if(this.color==="blue"){
          this.image=loadImage("blue.jpg")
        }
        this.visibility=255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed>3)
        {
          push()
          World.remove(world,this.body);
          this.visibility=this.visibility-15;
          console.log(this.visibility)
          
          
          translate(this.body.position.x, this.body.position.y);
         
          fill(this.color);
          tint(255,this.visibility);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
        else{
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(this.color);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        }
        
      }
}