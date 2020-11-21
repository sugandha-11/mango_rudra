class Stone{

  constructor(x,y,r){
      var options={
          isStatic:false,
          restitution:0.3,
          density:0.5,
      }
      this.r = r;
       this.image=loadImage("stone.png");
       this.body=Bodies.circle(x,y,this.r,options);
       World.add(world,this.body);
  }


        display(){
           var pos=this.body.position;
           image(this.image,pos.x,pos.y,this.r*2,this.r*2);
            
        }
}