let mybubble;
let shp;

function preload(){
  shp = loadImage("ship.png");
}

function setup(){
  createCanvas(600,600);
  mybubble = new Bubble(width/2, height/2);
}

function draw(){
  background(0);
  mybubble.move(mouseX, mouseY);
  mybubble.display();
}

let Bubble = function(x,y){
  this.pos = createVector(x,y);

  this.c = color(255)

  this.move = function(x,y){
    let destination = createVector(x,y);
    let dir = p5.Vector.sub(destination, this.pos);
    // move five percent of the way each time
    let step = dir.mult(0.05);
    this.pos = this.pos.add(step);
  }

  this.display = function(){
    fill(this.c);
    imageMode(CENTER)
    
    image(shp, this.pos.x, this.pos.y, shp.width/2,shp.height/2);
    ellipse(this.pos.x, this.pos.y, 4)
  }
}