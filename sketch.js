var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;
var timer;

var instruction;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = height * 3 / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
  isLeft = false;
  isRight = false;
  isPlummeting = false;
  isFalling = false;
  instruction = true;
  timer = {
    count: 0,
    sus: false
  };
}

function draw() {
  background(100, 155, 255);

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y);

fill(0);
textSize(30);
if(instruction)
{
      text('Press Arrow Keys to move', 100,100);
      text('Press Space to jump', 100, 200);
    }



  if (isLeft && isFalling) {
    /////////////////////////// adds jumping-left code ////////////////////////////////
    fill(248, 192, 155); //face
    ellipse(
      gameChar_x,
      gameChar_y - 60,
      8,
      16);

    stroke(0);
    strokeWeight(1);
    point( //left eye
      gameChar_x - 2.5,
      gameChar_y - 62);

    noStroke();
    rect( //neck
      gameChar_x - 2,
      gameChar_y - 53,
      3,
      3);

    stroke(0);
    strokeWeight(0.4);
    fill(88, 84, 83);

    beginShape(); //right hand
    vertex(gameChar_x + 2, gameChar_y - 50);
    vertex(gameChar_x + 10, gameChar_y - 25);
    vertex(gameChar_x + 6, gameChar_y - 28);
    vertex(gameChar_x - 3, gameChar_y - 50);
    endShape();

    fill(92, 89, 98); //body
    rect(
      gameChar_x - 5,
      gameChar_y - 50,
      10,
      25
    );

    fill(92, 89, 98);
    noStroke();
    beginShape(); //cape
    vertex(gameChar_x + 3, gameChar_y - 28);
    vertex(gameChar_x + 13, gameChar_y - 8);
    vertex(gameChar_x + 15, gameChar_y - 8);
    vertex(gameChar_x + 5, gameChar_y - 28);
    endShape();

    fill(88, 84, 83);
    stroke(0);
    beginShape(); //left hand
    vertex(gameChar_x - 2, gameChar_y - 50);
    vertex(gameChar_x - 8, gameChar_y - 35);
    vertex(gameChar_x - 15, gameChar_y - 33);
    vertex(gameChar_x - 15, gameChar_y - 30);
    vertex(gameChar_x - 5, gameChar_y - 32);
    vertex(gameChar_x + 4, gameChar_y - 50);
    endShape();

    beginShape(); //left leg
    vertex(gameChar_x - 2, gameChar_y - 28);
    vertex(gameChar_x - 12, gameChar_y - 22);
    vertex(gameChar_x - 10, gameChar_y - 10);
    vertex(gameChar_x - 7, gameChar_y - 10);
    vertex(gameChar_x - 7, gameChar_y - 20);
    vertex(gameChar_x - 2, gameChar_y - 24);
    endShape();

    beginShape(); //right leg
    vertex(gameChar_x - 1, gameChar_y - 28);
    vertex(gameChar_x - 2, gameChar_y - 15);
    vertex(gameChar_x + 7, gameChar_y - 14);
    vertex(gameChar_x + 7, gameChar_y - 17);
    vertex(gameChar_x + 2, gameChar_y - 18);
    vertex(gameChar_x + 3, gameChar_y - 28);
    endShape();


    triangle( // hat
      gameChar_x - 7, gameChar_y - 65,
      gameChar_x + 7, gameChar_y - 65,
      gameChar_x, gameChar_y - 74
    );


    strokeWeight(4);
    line( //sword
      gameChar_x + 4,
      gameChar_y - 55,
      gameChar_x + 8,
      gameChar_y - 20
    );
  } else if (isRight && isFalling) {
    //////////////////// adds jumping-right code ////////////////////////////////////////////
    fill(248, 192, 155);
    ellipse(
      gameChar_x,
      gameChar_y - 60,
      8,
      16);

    stroke(0);
    strokeWeight(1);
    point( //left eye
      gameChar_x + 2.5,
      gameChar_y - 62);

    noStroke();
    rect( //neck
      gameChar_x - 2,
      gameChar_y - 53,
      3,
      3);

    stroke(0);
    strokeWeight(0.4);
    fill(88, 84, 83);

    beginShape(); //right hand
    vertex(gameChar_x - 2, gameChar_y - 50);
    vertex(gameChar_x - 10, gameChar_y - 25);
    vertex(gameChar_x - 6, gameChar_y - 28);
    vertex(gameChar_x + 3, gameChar_y - 50);
    endShape();

    fill(92, 89, 98); //body
    rect(
      gameChar_x - 5,
      gameChar_y - 50,
      10,
      25
    );

    fill(92, 89, 98);
    noStroke();
    beginShape(); //cape
    vertex(gameChar_x - 3, gameChar_y - 28);
    vertex(gameChar_x - 13, gameChar_y - 8);
    vertex(gameChar_x - 15, gameChar_y - 8);
    vertex(gameChar_x - 5, gameChar_y - 28);
    endShape();

    fill(88, 84, 83);
    stroke(0);
    beginShape(); //left hand
    vertex(gameChar_x + 2, gameChar_y - 50);
    vertex(gameChar_x + 8, gameChar_y - 35);
    vertex(gameChar_x + 15, gameChar_y - 33);
    vertex(gameChar_x + 15, gameChar_y - 30);
    vertex(gameChar_x + 5, gameChar_y - 32);
    vertex(gameChar_x - 4, gameChar_y - 50);
    endShape();

    beginShape(); //left leg
    vertex(gameChar_x + 2, gameChar_y - 28);
    vertex(gameChar_x + 12, gameChar_y - 22);
    vertex(gameChar_x + 10, gameChar_y - 10);
    vertex(gameChar_x + 7, gameChar_y - 10);
    vertex(gameChar_x + 7, gameChar_y - 20);
    vertex(gameChar_x + 2, gameChar_y - 24);
    endShape();

    beginShape(); //right leg
    vertex(gameChar_x + 1, gameChar_y - 28);
    vertex(gameChar_x + 2, gameChar_y - 15);
    vertex(gameChar_x - 7, gameChar_y - 14);
    vertex(gameChar_x - 7, gameChar_y - 17);
    vertex(gameChar_x - 2, gameChar_y - 18);
    vertex(gameChar_x - 3, gameChar_y - 28);
    endShape();


    triangle( // hat
      gameChar_x - 7, gameChar_y - 65,
      gameChar_x + 7, gameChar_y - 65,
      gameChar_x, gameChar_y - 74
    );


    strokeWeight(4);
    line( //sword
      gameChar_x - 4,
      gameChar_y - 55,
      gameChar_x - 8,
      gameChar_y - 20
    );
  } else if (isLeft) {
    ///////////////////////////  adds walking left code /////////////////////////////////
    fill(248, 192, 155); //face
    ellipse(
      gameChar_x,
      gameChar_y - 60,
      8,
      16);

    stroke(0);
    strokeWeight(1);
    point( //left eye
      gameChar_x - 2.5,
      gameChar_y - 62);

    noStroke();
    rect( //neck
      gameChar_x - 2,
      gameChar_y - 53,
      3,
      3);

    stroke(0);
    strokeWeight(0.4);
    fill(88, 84, 83);

    beginShape(); //right hand
    vertex(gameChar_x + 2, gameChar_y - 50);
    vertex(gameChar_x + 10, gameChar_y - 25);
    vertex(gameChar_x + 6, gameChar_y - 27);
    vertex(gameChar_x - 3, gameChar_y - 50);
    endShape();

    fill(92, 89, 98); //body
    rect(
      gameChar_x - 5,
      gameChar_y - 50,
      10,
      25
    );

    fill(92, 89, 98);
    noStroke();
    beginShape(); //cape
    vertex(gameChar_x + 3, gameChar_y - 28);
    vertex(gameChar_x + 10, gameChar_y - 5);
    vertex(gameChar_x + 12, gameChar_y - 5);
    vertex(gameChar_x + 5, gameChar_y - 28);
    endShape();

    fill(88, 84, 83);
    stroke(0);
    beginShape(); //left hand
    vertex(gameChar_x - 2, gameChar_y - 50);
    vertex(gameChar_x - 12, gameChar_y - 25);
    vertex(gameChar_x - 8, gameChar_y - 27);
    vertex(gameChar_x + 3, gameChar_y - 50);
    endShape();

    beginShape(); //right leg
    vertex(gameChar_x - 3, gameChar_y - 25);
    vertex(gameChar_x - 9, gameChar_y - 0);
    vertex(gameChar_x - 5, gameChar_y - 0);
    vertex(gameChar_x + 3, gameChar_y - 25);
    endShape();

    beginShape(); //left leg
    vertex(gameChar_x + 3, gameChar_y - 25);
    vertex(gameChar_x + 5, gameChar_y - 0);
    vertex(gameChar_x + 1, gameChar_y - 0);
    vertex(gameChar_x - 3, gameChar_y - 25);
    endShape();

    triangle( // hat
      gameChar_x - 7, gameChar_y - 65,
      gameChar_x + 7, gameChar_y - 65,
      gameChar_x, gameChar_y - 74
    );


    strokeWeight(4);
    line( //sword
      gameChar_x + 4,
      gameChar_y - 55,
      gameChar_x + 8,
      gameChar_y - 20
    );
  } else if (isRight) {
    /////////////////////////////////////////////// adds walking right code ///////////////////////////////////////////////
    fill(248, 192, 155);
    ellipse(
      gameChar_x,
      gameChar_y - 60,
      8,
      16);

    stroke(0);
    strokeWeight(1);
    point( //left eye
      gameChar_x + 2.5,
      gameChar_y - 62);

    noStroke();
    rect( //neck
      gameChar_x - 2,
      gameChar_y - 53,
      3,
      3);

    stroke(0);
    strokeWeight(0.4);
    fill(88, 84, 83);

    beginShape(); //right hand
    vertex(gameChar_x - 2, gameChar_y - 50);
    vertex(gameChar_x - 10, gameChar_y - 25);
    vertex(gameChar_x - 6, gameChar_y - 27);
    vertex(gameChar_x + 3, gameChar_y - 50);
    endShape();

    fill(92, 89, 98); //body
    rect(
      gameChar_x - 5,
      gameChar_y - 50,
      10,
      25
    );

    fill(92, 89, 98);
    noStroke();
    beginShape(); //cape
    vertex(gameChar_x - 3, gameChar_y - 28);
    vertex(gameChar_x - 10, gameChar_y - 5);
    vertex(gameChar_x - 12, gameChar_y - 5);
    vertex(gameChar_x - 5, gameChar_y - 28);
    endShape();

    fill(88, 84, 83);
    stroke(0);
    beginShape(); //left hand
    vertex(gameChar_x + 2, gameChar_y - 50);
    vertex(gameChar_x + 12, gameChar_y - 25);
    vertex(gameChar_x + 8, gameChar_y - 27);
    vertex(gameChar_x - 3, gameChar_y - 50);
    endShape();

    beginShape(); //right leg
    vertex(gameChar_x + 3, gameChar_y - 25);
    vertex(gameChar_x + 9, gameChar_y - 0);
    vertex(gameChar_x + 5, gameChar_y - 0);
    vertex(gameChar_x - 3, gameChar_y - 25);
    endShape();

    beginShape(); //left leg
    vertex(gameChar_x - 3, gameChar_y - 25);
    vertex(gameChar_x - 5, gameChar_y - 0);
    vertex(gameChar_x - 1, gameChar_y - 0);
    vertex(gameChar_x + 3, gameChar_y - 25);
    endShape();

    triangle( // hat
      gameChar_x - 7, gameChar_y - 65,
      gameChar_x + 7, gameChar_y - 65,
      gameChar_x, gameChar_y - 74
    );


    strokeWeight(4);
    line( //sword
      gameChar_x - 4,
      gameChar_y - 55,
      gameChar_x - 8,
      gameChar_y - 20
    );
  } else if (isFalling || isPlummeting) {
    ////////////////////////////////////////////// adds jumping facing forwards code /////////////////////////////
    fill(248, 192, 155); //face
    ellipse(
      gameChar_x,
      gameChar_y - 60,
      12,
      16
    );
    stroke(0);
    strokeWeight(4);
    line( //sword
      gameChar_x - 12,
      gameChar_y - 55,
      gameChar_x + 12,
      gameChar_y - 20
    );
    strokeWeight(1);
    point(
      gameChar_x - 2,
      gameChar_y - 63
    );
    point(
      gameChar_x + 2,
      gameChar_y - 63
    );
    noStroke();
    rect( //neck
      gameChar_x - 2,
      gameChar_y - 53,
      4,
      3
    );
    stroke(0);
    strokeWeight(0.3);
    fill(92, 89, 98); //body
    rect(
      gameChar_x - 7,
      gameChar_y - 50,
      14,
      21
    );

    fill(92, 89, 98);
    rect( //cloak
      gameChar_x - 8,
      gameChar_y - 29,
      16,
      16
    );

    fill(88, 84, 83);
    strokeWeight(0.3);
    beginShape();
    vertex(gameChar_x - 7, gameChar_y - 50);
    vertex(gameChar_x - 10, gameChar_y - 50);
    vertex(gameChar_x - 10, gameChar_y - 33);
    vertex(gameChar_x, gameChar_y - 33);
    vertex(gameChar_x - 1, gameChar_y - 36);
    vertex(gameChar_x - 6, gameChar_y - 37);
    vertex(gameChar_x - 7, gameChar_y - 50);
    endShape();


    beginShape();
    vertex(gameChar_x + 7, gameChar_y - 50);
    vertex(gameChar_x + 10, gameChar_y - 50);
    vertex(gameChar_x + 10, gameChar_y - 35);
    vertex(gameChar_x, gameChar_y - 35);
    vertex(gameChar_x, gameChar_y - 38);
    vertex(gameChar_x + 6, gameChar_y - 39);
    vertex(gameChar_x + 7, gameChar_y - 50);
    endShape();

    beginShape(); //right leg
    vertex(gameChar_x - 4, gameChar_y - 28);
    vertex(gameChar_x - 9, gameChar_y - 15);
    vertex(gameChar_x - 5, gameChar_y - 4);
    vertex(gameChar_x - 3, gameChar_y - 7);
    vertex(gameChar_x - 4, gameChar_y - 16);
    vertex(gameChar_x, gameChar_y - 28);
    endShape();

    beginShape(); //right leg
    vertex(gameChar_x + 4, gameChar_y - 28);
    vertex(gameChar_x + 9, gameChar_y - 15);
    vertex(gameChar_x + 5, gameChar_y - 4);
    vertex(gameChar_x + 3, gameChar_y - 7);
    vertex(gameChar_x + 4, gameChar_y - 16);
    vertex(gameChar_x, gameChar_y - 28);
    endShape();

    triangle( // hat
      gameChar_x - 10, gameChar_y - 65,
      gameChar_x + 10, gameChar_y - 65,
      gameChar_x, gameChar_y - 75
    );
  } else {
    // add your standing front facing code
    fill(248, 192, 155);
    ellipse( //face
      gameChar_x,
      gameChar_y - 60,
      12,
      16
    );
    stroke(0);
    strokeWeight(4);
    line( //sword
      gameChar_x - 12,
      gameChar_y - 55,
      gameChar_x + 12,
      gameChar_y - 20
    );
    strokeWeight(1);
    point(
      gameChar_x - 2,
      gameChar_y - 63
    );
    point(
      gameChar_x + 2,
      gameChar_y - 63
    );

    noStroke();
    rect( //neck
      gameChar_x - 2,
      gameChar_y - 53,
      4,
      3
    );
    stroke(0);
    strokeWeight(0.3);
    fill(92, 89, 98); //body
    rect(
      gameChar_x - 7,
      gameChar_y - 50,
      14,
      25
    );

    fill(92, 89, 98);
    rect( //cloak
      gameChar_x - 8,
      gameChar_y - 25,
      16,
      20
    );

    strokeWeight(0.2);
    fill(88, 84, 83);
    rect( //left hand
      gameChar_x - 10,
      gameChar_y - 50,
      3,
      25
    );
    rect( // right hand
      gameChar_x + 7,
      gameChar_y - 50,
      3,
      25
    );
    rect( //left leg
      gameChar_x - 6,
      gameChar_y - 25,
      4,
      25
    );
    rect( //right leg
      gameChar_x + 2,
      gameChar_y - 25,
      4,
      25
    );
    triangle( // hat
      gameChar_x - 10, gameChar_y - 65,
      gameChar_x + 10, gameChar_y - 65,
      gameChar_x, gameChar_y - 75
    );


  }

  if(timer.sus)
  {
    timer.count += 1;
  }
  if(timer.count >= 150)
  {
    instruction = false;
  }

  if (isLeft && isFalling) {
    gameChar_x -= 7;
  } else if (isRight && isFalling) {
    gameChar_x += 7;
  } else if (isLeft) {
    gameChar_x -= 4;
  } else if (isRight) {
    gameChar_x += 4;
  }

  // actual jump
  if (isPlummeting && gameChar_y > floorPos_y - 100) {
    gameChar_y -= 6;
    isFalling = true;
  } else if (gameChar_y < floorPos_y) {
    isPlummeting = false;
    gameChar_y += 6;
  } else {
    isFalling = false;
    isPlummeting = false;
  }

}


function keyPressed() {


  timer.sus = true;

  if (keyCode == 32 && gameChar_y == floorPos_y) {
    isPlummeting = true;
  }
  if (keyCode == 37) {
    isLeft = true;
  } else if (keyCode == 39) {
    isRight = true;
  }
}

function keyReleased() {
  if (keyCode == 37) {
    isLeft = false;
  } else if (keyCode == 39) {
    isRight = false;
  }

}
