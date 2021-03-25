class Box{

    constructor(x,y,w,h){
       var options={

            friction:1.0,
            restitution:0.8,
            density:1.0
            
            
        }

        this.width=w;
        this.height=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.image=loadImage("sprite_0.png");
        World.add(world,this.body);

    }

    display(){

        var pos =this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        //  rectMode(CENTER);
        //  rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.image,0,0,190,100);        
        pop();

    }


}