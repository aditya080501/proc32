// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Constraint = Matter.Constraint;

var polygonImg;
var engine, world;
var score = 0;

function preload() {
    polygonImg = loadImage("polygon.png")
}

function setup() {
    var canvas = createCanvas(1200, 400)
    console.log("Aaditya")
    background("black")
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(600, height, 1200, 20);
    object1 = new Object(80, 20, 78, 45);
    object2 = new Object(80, 20, 178, 145);

    block1 = new Block(270, 275, 30, 40)
    block2 = new Block(300, 275, 30, 40)
    block3 = new Block(330, 275, 30, 40)
    block4 = new Block(360, 275, 30, 40)
    block5 = new Block(390, 275, 30, 40)
    block6 = new Block(420, 275, 30, 40)
    block7 = new Block(450, 275, 30, 40)
    block8 = new Block(330, 235, 30, 40)
    block9 = new Block(360, 235, 30, 40)
    block10 = new Block(390, 235, 30, 40)
    block11 = new Block(420, 235, 30, 40)
    block12 = new Block(450, 235, 30, 40)
    block13 = new Block(360, 195, 30, 40)
    block14 = new Block(390, 195, 30, 40)
    block15 = new Block(420, 195, 30, 40)
    block16 = new Block(390, 155, 30, 40)
}


function draw() {
    background(0);
    console.log("Aaditya")
    Engine.update(engine)
    ground.display()
    object1.display()
    object2.display()

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    text("SCORE :"+score,750,40)
}

function mouseDragged() {
    Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    slingShot.fly();
}

function KeyPressed(){
    if (KeyCode ===32 ){
        slingShot.attach(this.body)
    }
   
}

score(){
    if(this.visiblity<0 && this.visiblity>-105){
        score++;
    }
}
