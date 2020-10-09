const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var engine,world;
var ground,stand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var polygon,polygonImg;
var slingshot;
var score=0;
var backgroundImg;

function preload(){
  polygonImg=loadImage("polygon.png");
getBackgroundImg();
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

    Engine.run(engine);

  ground=new Ground(400,height,800,20);
  //level one
  box1= new Box(300,275,30,50);
  box2= new Box(330,275,30,50);
  box3= new Box(360,275,30,50);
  box4= new Box(390,275,30,50);
  box5=new Box(420,275,30,50);
  box12= new Box(450,275,30,50);
  box13= new Box(480,275,30,50);

  //level two
  box6= new Box(330,235,30,50);
  box7= new Box(360,235,30,50);
  box8= new Box(390,235,30,50);
  box14= new Box(420,235,30,50);
  box15= new Box(450,235,30,50);

  //level three
  box9= new Box(360,195,30,50);
  box16=new Box(390,195,30,50);
  box17= new Box(420,195,30,50);

  //top

  box11= new Box(390,155,30,50);

  //polygon
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot=new SlingShot(polygon,{x:100,y:200});


  //stand
  stand= new Ground(390,300,250,20);


}

function draw() {

  if(backgroundImg){
    background(backgroundImg);  

  }


textSize(35);
fill("white");
text("score:"+score,600,40);





Engine.update(engine);
  
  

  box1.display();
  //console.log(box2);
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
 
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();



  slingshot.display();

  ground.display();

  stand.display();
 // polygon.display();

 imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,20,40);



  

}

function keyPressed(){
  if(keyCode===32){
    slinshot.attach(polygon);
  }
}


function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
  //gameState = "launched";


}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
    bg="images/sun.jpg"
    }
  else{
    bg= "images/nighttime.jpg";
    
  }

  backgroundImg = loadImage(bg);
  //console.log(backgroundImg);
}

