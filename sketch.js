function setup() {
  createCanvas(400, 400);
  noStroke();

  background(220);
  translate(width/2, height/2);

  for (var i = 20; i > 0; i--) {

    let scaleFactor = map(i, 1, 20, 1, 700);

    if(i % 2 == 0) {
      fill(0);
    } else {
      fill(255);
    }

  circle(0, 0, scaleFactor);

  }

}

function draw() {

}
