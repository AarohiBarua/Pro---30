const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,slingshot;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(200,50);
    slingshot = new SlingShot(polygon.body,{x:200,y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(polygon.body.position.x);
    console.log(polygon.body.position.y);
    console.log(polygon.body.angle);
    polygon.display();
}
