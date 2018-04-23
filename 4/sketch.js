let mybubble;
let shp;
let stars;
let time;
let speedoftime;
let goal;

let shipdata = {ship:"HMS Vierth", 
                journey: [{start:[164, 260], destination:[370, 545], departure:2, arrival:6},
                          {start:[370, 545], destination:[729, 496], departure:7, arrival:9},
                          {start:[729, 496], destination:[529, 186], departure:9, arrival:12}]
               }


let places = [[164, 260], [370, 545], [729, 496], [529,186], [463, 309], [264, 94]]

function preload(){
  shp = loadImage("ship.png");
  stars = loadImage("stars.jpg")
}

function setup(){
  createCanvas(800,600);
  mybubble = new Bubble(width/2, height/2, shp, shipdata);
  image(stars, 0, 0,stars.width/2, stars.height/2);
  time = 0;
  speedoftime = 2;
  goal = 0;
}

function draw(){
  image(stars, 0, 0,stars.width/2, stars.height/2);
  goal = mybubble.intransit(time);
  if (goal[0]){
    mybubble.move(mybubble.data.journey[goal[1]].destination[0], mybubble.data.journey[goal[1]].destination[1]);
  } 

  mybubble.display();
  time = timeflow(time, speedoftime);
}

function mousePressed(){
  console.log(mouseX, mouseY);
}

function timeflow(time, timespeed){
  if (frameCount % (timespeed * 60) == 0){
    return time += 1;
  } else {
    return time
  }
}

class Bubble {
  constructor(x, y, icon, data) {
    this.pos = createVector(x, y);
    this.c = color(255);
    this.icon = icon;
    this.data = data;
    this.speed = 1;
  }

  setspeed(departure, arrival, timespeed){
    let intervals = arrival - departure
    let goalframes = timespeed * intervals
  }

  intransit(time){
    let it = false;
    let i = 0;
    for (i = 0; i < this.data.journey.length; i++) {
      let dep = this.data.journey[i].departure
      let arv = this.data.journey[i].arrival
      if (time >= dep && time < arv) {
        it = true;
        break
      }
    }
    return [it, i];
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
