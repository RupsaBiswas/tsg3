class Box {
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
          'restitution':0.3,
          'friction':0.0,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
      this.width = width;
      this.height = height;
     
      this.Visibility=255;

    }

    score(){
      if(this.Visibility< 0 && this.Visibility>-105){
        score++ ;
        
      }
     // console.log("working");
    }





    display(){
      var pos =this.body.position;
      
      //console.log(this.body.speed);
      if(this.body.speed < 3){
        var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
     rotate(angle);
     fill("lightblue")
      rectMode(CENTER);
      rect(0,0,this.width,this.height);

      pop();
       }
       
       else{
         World.remove(world, this.body);
         push();
         this.Visibility = this.Visibility - 5;
        console.log(this.Visibility);
         //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
      }
    
     

    }

    

  
