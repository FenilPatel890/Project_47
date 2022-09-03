const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var BackgroundImg;
var canvas;
var groceryShop,foodShop,dailyNeedShop,meatShop,storeImg

function preload() {

BackgroundImg = loadImage("Images/Background.png")
}

function setup() {
    canvas = createCanvas(2000,900);

    engine = Engine.create();
    world = engine.world;

    groceryShop = new Store(300,100,300,300);
    foodShop = new Store(500,100,300,300);
    dailyNeedShop = new Store(300,300,300,300);
    meatShop = new Store(500,300,300,300);
}

function draw() {
background(BackgroundImg);

Engine.update(engine);

groceryShop.display();
foodShop.display();
dailyNeedShop.display();
meatShop.display();



drawSprites();
}