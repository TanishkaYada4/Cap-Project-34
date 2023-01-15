
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango
var tree
var background
var rock
var score

function preload(){
mango.loadImage("mango.jpg")
tree.loadImage("tree.png")


}


function setup() {
  createCanvas(400,400);
mango.createSprite(50,30,20,40)
tree.createSprite(50,100,20,40)
  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  background.addImage("yard.png")

  Engine.update(engine);
  drawSprites()
if (mango.isTouching("rock")){

}

}

