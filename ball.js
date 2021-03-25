class Ball{
    constructor(x,y){
      var  option={

            restitution:1.2,
            density:1.0,
            friction:1.5

        }

        this.r=40;
        this.body=Bodies.circle(x,y,40,option);
        this.image=loadImage("sprite_20.png");
        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,70,70);   
        pop()
    }

}