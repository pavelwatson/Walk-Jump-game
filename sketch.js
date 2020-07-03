var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummetingCanyon;
var isPlummetingOutsideOfCanyon;
var isFalling;

var tree;
var canyon;
var mountain;
var cloud;

var collectable;
var isFound;

var instruction;
var timer;

var outsideOfCanyon_range;
var canyon_range;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = height * 3 / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
  isLeft = false;
  isRight = false;
  isPlummetingCanyon = false;
  isPlummetingOutsideOfCanyon = false;
  isFalling = false;
  instruction = true;
  timer = {
    count: 0,
    sus: false
  };
  tree = {
    x_pos: width / 2 - 100,
    y_pos: floorPos_y - 32
  };
  canyon = {
    x_pos: 50,
    width: 150
  };
  mountain = {
    x_pos: 400,
    y_pos: 200,
    size: 100
  };
  cloud = {
    x_pos: 100,
    y_pos: 100,
    size: 150
  };
  collectable = {
    x_pos: 40,
    y_pos: 400,
    size: 150,
    isFound: false
  };
}

function draw() {
  background(100, 155, 255);

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y);

  /////////////////// CANYON ///////////////////
  noStroke();
  fill(100, 155, 255);
  rect(canyon.x_pos, floorPos_y, canyon.width, width - floorPos_y);
  /////////////////// MOUNTAIN ///////////////////
  fill(187, 198, 220);
  triangle(mountain.x_pos + 20 * mountain.size / 100, mountain.y_pos - 1 * mountain.size / 100, mountain.x_pos + 100 * mountain.size / 100, mountain.y_pos + 189 * mountain.size / 100, mountain.x_pos - 22 * mountain.size / 100, mountain.y_pos + 197 * mountain.size / 100);
  fill(161, 169, 192);
  triangle(mountain.x_pos - 106 * mountain.size / 100, mountain.y_pos + 231 * mountain.size / 100, mountain.x_pos + 128 * mountain.size / 100, mountain.y_pos + 232 * mountain.size / 100, mountain.x_pos - 9 * mountain.size / 100, mountain.y_pos + 39 * mountain.size / 100);
  triangle(mountain.x_pos + 57 * mountain.size / 100, mountain.y_pos + 46 * mountain.size / 100, mountain.x_pos + 135 * mountain.size / 100, mountain.y_pos + 232 * mountain.size / 100, mountain.x_pos - 49 * mountain.size / 100, mountain.y_pos + 232 * mountain.size / 100);
  fill(255);
  triangle(mountain.x_pos + 57 * mountain.size / 100, mountain.y_pos + 46 * mountain.size / 100, mountain.x_pos + 70 * mountain.size / 100, mountain.y_pos + 80 * mountain.size / 100, mountain.x_pos + 57 * mountain.size / 100, mountain.y_pos + 68 * mountain.size / 100);
  triangle(mountain.x_pos + 57 * mountain.size / 100, mountain.y_pos + 46 * mountain.size / 100, mountain.x_pos + 42 * mountain.size / 100, mountain.y_pos + 73 * mountain.size / 100, mountain.x_pos + 57 * mountain.size / 100, mountain.y_pos + 68 * mountain.size / 100);
  triangle(mountain.x_pos - 9 * mountain.size / 100, mountain.y_pos + 39 * mountain.size / 100, mountain.x_pos - 31 * mountain.size / 100, mountain.y_pos + 80 * mountain.size / 100, mountain.x_pos - 9 * mountain.size / 100, mountain.y_pos + 74 * mountain.size / 100);
  triangle(mountain.x_pos - 9 * mountain.size / 100, mountain.y_pos + 74 * mountain.size / 100, mountain.x_pos - 9 * mountain.size / 100, mountain.y_pos + 39 * mountain.size / 100, mountain.x_pos + 16 * mountain.size / 100, mountain.y_pos + 73 * mountain.size / 100);
  triangle(mountain.x_pos + 20 * mountain.size / 100, mountain.y_pos - 1 * mountain.size / 100, mountain.x_pos + 34 * mountain.size / 100, mountain.y_pos + 32 * mountain.size / 100, mountain.x_pos + 23 * mountain.size / 100, mountain.y_pos + 28 * mountain.size / 100);
  triangle(mountain.x_pos + 23 * mountain.size / 100, mountain.y_pos + 28 * mountain.size / 100, mountain.x_pos + 21 * mountain.size / 100, mountain.y_pos - 1 * mountain.size / 100, mountain.x_pos + 13 * mountain.size / 100, mountain.y_pos + 32 * mountain.size / 100);
  /////////////////// TREE ///////////////////
  noStroke();
  fill(190, 95, 23); //tree trunk
  triangle(tree.x_pos + 67, tree.y_pos + 32, tree.x_pos + 82, tree.y_pos + 16, tree.x_pos + 84, tree.y_pos + 32);
  triangle(tree.x_pos + 84, tree.y_pos + 32, tree.x_pos + 86, tree.y_pos + 18, tree.x_pos + 101, tree.y_pos + 32);
  rect(tree.x_pos + 78, tree.y_pos, 12, 32);
  fill(34, 124, 17); //tree leaves
  triangle(tree.x_pos + 40, tree.y_pos + 11, tree.x_pos + 83, tree.y_pos - 29, tree.x_pos + 85, tree.y_pos + 3);
  triangle(tree.x_pos + 84, tree.y_pos + 3, tree.x_pos + 83, tree.y_pos - 29, tree.x_pos + 128, tree.y_pos + 12);
  triangle(tree.x_pos + 40, tree.y_pos - 11, tree.x_pos + 82, tree.y_pos - 48, tree.x_pos + 122, tree.y_pos - 11);
  triangle(tree.x_pos + 50, tree.y_pos - 37, tree.x_pos + 80, tree.y_pos - 69, tree.x_pos + 115, tree.y_pos - 36);
  triangle(tree.x_pos + 54, tree.y_pos - 57, tree.x_pos + 83, tree.y_pos - 84, tree.x_pos + 112, tree.y_pos - 58);
  /////////////////// CLOUD ///////////////////
  fill(255);
  ellipse(cloud.x_pos + 1 * cloud.size / 100, cloud.y_pos + 11 * cloud.size / 100, 25 * cloud.size / 100, 25 * cloud.size / 100);
  ellipse(cloud.x_pos + 40 * cloud.size / 100, cloud.y_pos - 2 * cloud.size / 100, 45 * cloud.size / 100, 45 * cloud.size / 100);
  ellipse(cloud.x_pos + 76 * cloud.size / 100, cloud.y_pos + 37 * cloud.size / 100, 50 * cloud.size / 100, 52 * cloud.size / 100);
  ellipse(cloud.x_pos + 60 * cloud.size / 100, cloud.y_pos + 9 * cloud.size / 100, 45 * cloud.size / 100, 45 * cloud.size / 100);
  ellipse(cloud.x_pos + 21 * cloud.size / 100, cloud.y_pos + 10 * cloud.size / 100, 45 * cloud.size / 100, 45 * cloud.size / 100);
  ellipse(cloud.x_pos - 19 * cloud.size / 100, cloud.y_pos + 39 * cloud.size / 100, 45 * cloud.size / 100, 45 * cloud.size / 100);
  ellipse(cloud.x_pos - 4 * cloud.size / 100, cloud.y_pos + 30 * cloud.size / 100, 45 * cloud.size / 100, 45 * cloud.size / 100);
  ellipse(cloud.x_pos - 18 * cloud.size / 100, cloud.y_pos + 40 * cloud.size / 100, 45 * cloud.size / 100, 45 * cloud.size / 100);
  rect(cloud.x_pos - 15 * cloud.size / 100, cloud.y_pos + 21 * cloud.size / 100, 96 * cloud.size / 100, 42 * cloud.size / 100);



  fill(0);
  textSize(30);
  if (instruction) {
    text('Press Arrow Keys to move', 550, 100);
    text('Press Space to jump', 550, 200);
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
  } else if (isFalling || isPlummetingCanyon || isPlummetingOutsideOfCanyon) {
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

  if (dist(collectable.x_pos, collectable.y_pos, gameChar_x, gameChar_y) <= 35) {
    collectable.isFound = true;
  }
  if (collectable.isFound == false) {
    /////////////////// COLLECTABLE ITEM ///////////////////
    fill(79, 195, 247);
    stroke(0);
    strokeWeight(0.5);
    triangle(collectable.x_pos - 21 * collectable.size / 100, collectable.y_pos + 12 * collectable.size / 100, collectable.x_pos + 7 * collectable.size / 100, collectable.y_pos + 12 * collectable.size / 100, collectable.x_pos - 7 * collectable.size / 100, collectable.y_pos + 32 * collectable.size / 100);
    line(collectable.x_pos - 13 * collectable.size / 100, collectable.y_pos + 12 * collectable.size / 100, collectable.x_pos - 7 * collectable.size / 100, collectable.y_pos + 32 * collectable.size / 100);
    line(collectable.x_pos - 1 * collectable.size / 100, collectable.y_pos + 12 * collectable.size / 100, collectable.x_pos - 7 * collectable.size / 100, collectable.y_pos + 32 * collectable.size / 100);
    triangle(collectable.x_pos - 21 * collectable.size / 100, collectable.y_pos + 12 * collectable.size / 100, collectable.x_pos - 16 * collectable.size / 100, collectable.y_pos + 5 * collectable.size / 100, collectable.x_pos - 13 * collectable.size / 100, collectable.y_pos + 12 * collectable.size / 100);
    triangle(collectable.x_pos - 16 * collectable.size / 100, collectable.y_pos + 5 * collectable.size / 100, collectable.x_pos - 13 * collectable.size / 100, collectable.y_pos + 12 * collectable.size / 100, collectable.x_pos - 7 * collectable.size / 100, collectable.y_pos + 5 * collectable.size / 100);
    triangle(collectable.x_pos - 7 * collectable.size / 100, collectable.y_pos + 5 * collectable.size / 100, collectable.x_pos - 13 * collectable.size / 100, collectable.y_pos + 12 * collectable.size / 100, collectable.x_pos - 1 * collectable.size / 100, collectable.y_pos + 12 * collectable.size / 100);
    triangle(collectable.x_pos - 1 * collectable.size / 100, collectable.y_pos + 12 * collectable.size / 100, collectable.x_pos - 7 * collectable.size / 100, collectable.y_pos + 5 * collectable.size / 100, collectable.x_pos + 3 * collectable.size / 100, collectable.y_pos + 5 * collectable.size / 100);
    triangle(collectable.x_pos + 3 * collectable.size / 100, collectable.y_pos + 5 * collectable.size / 100, collectable.x_pos - 1 * collectable.size / 100, collectable.y_pos + 12 * collectable.size / 100, collectable.x_pos + 7 * collectable.size / 100, collectable.y_pos + 12 * collectable.size / 100);
  }

  //instruction disappearance
  if (timer.sus) {
    timer.count += 1;
  }
  if (timer.count >= 150) {
    instruction = false;
  }

  //initializing variables for range of Canyon and Outside of Canyon
  outsideOfCanyon_range = gameChar_x >= 0 && gameChar_x <= width;
  canyon_range = gameChar_x >= canyon.x_pos && gameChar_x <= canyon.x_pos + canyon.width;

  //moving left in canyon
  if (isLeft && isFalling && gameChar_x >= canyon.x_pos + 7.5 && gameChar_y > floorPos_y) {
    gameChar_x -= 7.5;
  } else if (isLeft && gameChar_x >= canyon.x_pos + 7.5 && gameChar_y > floorPos_y) {
    gameChar_x -= 7.5;
  }
  //moving left ouside of canyon in a jump(extra speed boost in Jump for better looking)
  else if (isLeft && isFalling && gameChar_y <= floorPos_y && gameChar_x >= 7.5 && outsideOfCanyon_range) {
    gameChar_x -= 7.5;
  }
  //moving left ouside of canyon
  else if (isLeft && gameChar_y <= floorPos_y && gameChar_x >= 7.5 && outsideOfCanyon_range) {
    gameChar_x -= 7.5;
  }

  //moving right in canyon
  if (isRight && isFalling && gameChar_x < canyon.x_pos + canyon.width - 7.5 && gameChar_y > floorPos_y) {
    gameChar_x += 7.5;
  } else if (isRight && gameChar_x < canyon.x_pos + canyon.width - 7.5 && gameChar_y > floorPos_y) {
    gameChar_x += 7.5;
  }
  //moving right ouside of canyon in a jump(extra speed boost in Jump for better looking)
  else if (isRight && isFalling && gameChar_y <= floorPos_y && gameChar_x <= width - 7.5 && outsideOfCanyon_range) {
    gameChar_x += 7.5;
  }
  //moving right outside of canyon
  else if (isRight && gameChar_y <= floorPos_y && gameChar_x <= width - 7.5 && outsideOfCanyon_range) {
    gameChar_x += 7.5;
  }

  //jump from canyon
  if (isPlummetingCanyon && gameChar_y <= height + 10 && gameChar_y > height - 150) {
    isFalling = true;
    gameChar_y -= 6;
  }
  // jump from outside of canyon
  else if (isPlummetingOutsideOfCanyon && outsideOfCanyon_range && gameChar_y <= floorPos_y && gameChar_y > floorPos_y - 150) {
    isFalling = true;
    gameChar_y -= 6;
  }
  //gravity from canyon
  else if (gameChar_y < height && canyon_range) {
    isPlummetingCanyon = false;
    isPlummetingOutsideOfCanyon = false;
    isFalling = true;
    gameChar_y += 6;
  }
  // gravity outside of canyon
  else if (outsideOfCanyon_range && gameChar_y < floorPos_y) {
    isPlummetingCanyon = false;
    isPlummetingOutsideOfCanyon = false;
    gameChar_y += 6;
  }

  //turns off falling animation
  else {
    isFalling = false;
  }
}



function keyPressed() {

  timer.sus = true;

  if (keyCode == 32 && gameChar_y == floorPos_y) {
    isPlummetingOutsideOfCanyon = true;
  } else if (keyCode == 32 && gameChar_y >= height && gameChar_y <= height + 10) {
    isPlummetingCanyon = true;
  }

  if (keyCode == 37) {
    isLeft = true;
  }
  if (keyCode == 39) {
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
