let mybubble;
let shp;
let stars;

function preload(){
  shp = loadImage("ship.png");
  stars = loadImage("stars.jpg")
}

function setup(){
  createCanvas(800,600);
  mybubble = new Bubble(width/2, height/2, shp);
  image(stars, 0, 0,stars.width/2, stars.height/2);
}

function draw(){
  image(stars, 0, 0,stars.width/2, stars.height/2);
  mybubble.move(mouseX, mouseY);
  mybubble.display();
}

function mousePressed(){
  console.log(mouseX, mouseY);
}

class Bubble {
  constructor(x, y, icon) {
    this.pos = createVector(x, y);
    this.c = color(255);
    this.icon = icon
  }
  
  move(x, y) {
      let destination = createVector(x, y);
      let dir = p5.Vector.sub(destination, this.pos);
      // move five percent of the way each time
      let step = dir.mult(0.05);
      this.pos = this.pos.add(step);
  };

  display () {
      fill(this.c);
      imageMode(CENTER);
      image(this.icon, this.pos.x, this.pos.y, shp.width / 4, shp.height / 4);
  };
}
