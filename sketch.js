let x = 200; //obstacle x position
let y = 0; //obstacle y position
let diam1 = 80; //obstacle diameter

let xPos2 = 200; //player x position
let yPos2 = 330; //player y position
let diam2 = 50; //player diameter

let state = 'mainPage';
let cnv;

function setup() {
  cnv = createCanvas(400, 400);
  noStroke();
  textAlign(CENTER);
  //frameRate(20);
}

function draw() {
  switch (state) {
    case 'mainPage':
      mainPage();
      break;
    case 'endPage':
      endPage();
      cnv.mouseClicked(endPageMouseClicked);
      break;
  }


}

function mainPage() {
  background(0);
  
  //obstacle
  fill('red');
  ellipse(x, y - 25, diam1);

  y += 2;
  if (y >= height + 30) {
    y = 0;
  }

  //player
  fill('white');
  ellipse(xPos2, yPos2, diam2);

  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      xPos2 += 5;
    } else if (keyCode == LEFT_ARROW) {
      xPos2 -= 5;
    }
  }

  var distToMe = dist(xPos2, yPos2, x, y);//distance between player and obstacle
  if (distToMe < diam1/2 + diam2/2) { //sum of radii
    state = 'endPage';
  }
}

function endPage() {
  background(200, 30, 60);
  textSize(50);
  text('GAME OVER',width/2, 100)
  
  textSize(15);
  text('Click anywhere to restart', width/2, 200);
}

function endPageMouseClicked() {
  state = 'mainPage';
  y = 0;
  xPos2 = 200;
}