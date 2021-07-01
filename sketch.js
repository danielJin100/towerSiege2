const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var cheese, ground, plat1, plat2, string;
var blocksArray1 = [];
var release;

function preload() {
    
}
function setup() {
    engine = Engine.create();
    world = engine.world;

    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 5-(i*2); j++){
            var block = new Block(j*50+900+i*50, i*-50+450, 50, 50);
            blocksArray1.push(block);
        }
    }
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 5-(i*2); j++){
            var block = new Block(j*50+1200+i*50, i*-50+350, 50, 50);
            blocksArray1.push(block);
        }
    }
    
    createCanvas(1600, 800);

    cheese = new Cheese(200,600,10)
    ground = new Ground(800,850,1600,200);
    string = new String(cheese.body,{x:200,y:600})
    plat1 = new Ground(1000,500,250,30);
    plat2 = new Ground(1300, 400, 250, 30);
    Engine.run(engine);
}
function draw() {
    Engine.update(engine);
    background(0);
    stroke(255);
    fill(255);
    text("Drag the chunk of cheese and release to fire, try to knock down the tower!",800,200);
    cheese.display();
    ground.display();
    string.display();
    plat1.display();
    plat2.display();

    for(var a = 0; a < blocksArray1.length; a++){
        blocksArray1[a].display();
    }
    
}

function mouseDragged(){
    Matter.Body.setPosition(cheese.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    string.fly();
}
function keyPressed(){
    if(keyCode === 32){
        string.attach(cheese.body);
    }
}

