class Dustbin {
    constructor(x, y, width, height){
        var options = {
            isStatic:true,
            'restitution' : 0,
            'friction':0,
            'density':1,                   
        }
       
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinwidth, this.wallThickness, {
            isStatic:true
        });
        World.add(world, this.bottomBody)

        this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        Matter.Body.setAngle(this.leftWallBody, this.angle) 
        World.add(world, this.leftWallBody)

        this.rightWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
       Matter.Body.setAngle(this.rightWallBody, this.angle)
       World.add(world, this.rightWallBody)
       
        this.dustbinwidth = 200;
        this.dustbinheight = 100;
        this.dustbinThickness = 20;
        this.angle = 0;
        this.x = x;
        this.y = y;

        
    }
        display(){
            rectMode(CENTER);
            fill("white");
            rect(this.bottombody.position.x, this.bottombody.position.y, this.dustbinwidth, this.wallThickness);
            rect(this.x-(this.dustbinWidth/2), this.y-(this.dustbinHeight/2), this.wallThickness, this.dustbinHeight);
         
   }
} 


        
