const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup(){
createCanvas(windowWidth/2,windowHeight/2);

    engine = Engine.create();
    world = engine.world;

    // create bobs
    b1 = new Pendulum(40,70,"red");
    b2 = new Pendulum(80,70,"red");
    b3 = new Pendulum(120,70,"red");
    b4 = new Pendulum(160,70,"red");
    b5 = new Pendulum(200,70,"red");


    // create sling
    s1 = new sling(body.b1,{x:40,y:10});
    s2 = new sling(body.b2,{x:80,y:10});
    s3 = new sling(body.b3,{x:120,y:10});
    s4 = new sling(body.b4,{x:160,y:10});
    s5 = new sling(body.b5,{x:200,y:10});
}



function draw(){
    background(0,0,0);

    // displaying bobs
        b1.display();
        b2.display();
        b3.display();
        b4.display();
        b5.display();

        // displaying slings
        s1.display();
        s2.display();
        s3.display();
        s4.display();
        s5.display();
}


function mouseDragged(){
 
    Matter.Body.setPosition(b1.body, {x: mouseX , y: mouseY});
}
