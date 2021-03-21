const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Hammer;
var Rubber;
var Plane;
var Stone;
var Iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    Plane = new plane(600,height,1200,20)
    Hammer = new hammer(10,100);
    Stone = new stone(500,200 );
    Iron = new iron(720,100);
    Rubber = new rubber(250,100,50,50);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    Plane.display();
    Hammer.display();
    Stone.display();
    Iron.display();   
    Rubber.display();
}