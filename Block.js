class Block {
    constructor(x, y, width, height) {
        var option = {
            restitution: 0.4,
            friction: 0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity=255;
            display() 
            if(this.body.speed < 3){ 
                super.display();
               }
               else{
                 World.remove(world, this.body);
                 push();
                 this.Visiblity = this.Visiblity - 5;
                 tint(255,this.Visiblity);
                 image(this.image, this.body.position.x, this.body.position.y, 50, 50);
                 pop();
               }
            
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate = nslate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.this.width, this.height);
        pop();
       
      
    }
    
    
     
    

};
function score (){
      block1.score();
      block2.score();
      block3.score();
      block4.score();
      block5.score();
      block6.score();
      block7.score();
      block8.score();
      block9.score();
}
