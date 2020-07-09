/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectables;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = height * 3 / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  // Boolean variables to control the movement of the game character.
  isLeft = false;
  isRight = false;

  // Variable to control the background scrolling.
  scrollPos = 0;

  // Initialise arrays of scenery objects.
  trees_x = [100, 300, 800, 1000];
  clouds = [{
      x_pos: 100,
      y_pos: 100,
      size: 150
    },
    {
      x_pos: 600,
      y_pos: 100,
      size: 100
    },
    {
      x_pos: 800,
      y_pos: 200,
      size: 150
    }
  ];
  mountains = [{
      x_pos: 400,
      y_pos: floorPos_y - 232,
      size: 100
    },
    {
      x_pos: 1800,
      y_pos: floorPos_y - 346,
      size: 150
    },
    {
      x_pos: 1000,
      y_pos: floorPos_y - 462,
      size: 200
    }
  ];
  canyons = [{
      x_pos: 600,
      width: 150
    },
    {
      x_pos: 1300,
      width: 250
    },
    {
      x_pos: 1000,
      width: 100
    }
  ]
  collectables = [{
      x_pos: (2 * canyons[0].x_pos + canyons[0].width) / 2 + 10,
      y_pos: floorPos_y - 150,
      size: 150,
      isFound: false
    },
    {
      x_pos: (2 * canyons[1].x_pos + canyons[1].width) / 2 + 10,
      y_pos: floorPos_y - 150,
      size: 150,
      isFound: false
    },
    {
      x_pos: (2 * canyons[2].x_pos + canyons[2].width) / 2 + 10,
      y_pos: floorPos_y - 150,
      size: 150,
      isFound: false
    }
  ]
}

function draw() {
  background(100, 155, 255); // fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height / 4); // draw some green ground


  push();
  translate(scrollPos, 0)

  // Draw clouds.
  for (var i = 0; i < clouds.length; i++) {
    fill(255);
    ellipse(clouds[i].x_pos + 1 * clouds[i].size / 100, clouds[i].y_pos + 11 * clouds[i].size / 100, 25 * clouds[i].size / 100, 25 * clouds[i].size / 100);
    ellipse(clouds[i].x_pos + 40 * clouds[i].size / 100, clouds[i].y_pos - 2 * clouds[i].size / 100, 45 * clouds[i].size / 100, 45 * clouds[i].size / 100);
    ellipse(clouds[i].x_pos + 76 * clouds[i].size / 100, clouds[i].y_pos + 37 * clouds[i].size / 100, 50 * clouds[i].size / 100, 52 * clouds[i].size / 100);
    ellipse(clouds[i].x_pos + 60 * clouds[i].size / 100, clouds[i].y_pos + 9 * clouds[i].size / 100, 45 * clouds[i].size / 100, 45 * clouds[i].size / 100);
    ellipse(clouds[i].x_pos + 21 * clouds[i].size / 100, clouds[i].y_pos + 10 * clouds[i].size / 100, 45 * clouds[i].size / 100, 45 * clouds[i].size / 100);
    ellipse(clouds[i].x_pos - 19 * clouds[i].size / 100, clouds[i].y_pos + 39 * clouds[i].size / 100, 45 * clouds[i].size / 100, 45 * clouds[i].size / 100);
    ellipse(clouds[i].x_pos - 4 * clouds[i].size / 100, clouds[i].y_pos + 30 * clouds[i].size / 100, 45 * clouds[i].size / 100, 45 * clouds[i].size / 100);
    ellipse(clouds[i].x_pos - 18 * clouds[i].size / 100, clouds[i].y_pos + 40 * clouds[i].size / 100, 45 * clouds[i].size / 100, 45 * clouds[i].size / 100);
    rect(clouds[i].x_pos - 15 * clouds[i].size / 100, clouds[i].y_pos + 21 * clouds[i].size / 100, 96 * clouds[i].size / 100, 42 * clouds[i].size / 100);
  }

  // Draw mountains.
  for (var i = 0; i < mountains.length; i++) {
    fill(187, 198, 220);
    triangle(mountains[i].x_pos + 20 * mountains[i].size / 100, mountains[i].y_pos - 1 * mountains[i].size / 100, mountains[i].x_pos + 100 * mountains[i].size / 100, mountains[i].y_pos + 189 * mountains[i].size / 100, mountains[i].x_pos - 22 * mountains[i].size / 100, mountains[i].y_pos + 197 * mountains[i].size / 100);
    fill(161, 169, 192);
    triangle(mountains[i].x_pos - 106 * mountains[i].size / 100, mountains[i].y_pos + 231 * mountains[i].size / 100, mountains[i].x_pos + 128 * mountains[i].size / 100, mountains[i].y_pos + 232 * mountains[i].size / 100, mountains[i].x_pos - 9 * mountains[i].size / 100, mountains[i].y_pos + 39 * mountains[i].size / 100);
    triangle(mountains[i].x_pos + 57 * mountains[i].size / 100, mountains[i].y_pos + 46 * mountains[i].size / 100, mountains[i].x_pos + 135 * mountains[i].size / 100, mountains[i].y_pos + 232 * mountains[i].size / 100, mountains[i].x_pos - 49 * mountains[i].size / 100, mountains[i].y_pos + 232 * mountains[i].size / 100);
    fill(255);
    triangle(mountains[i].x_pos + 57 * mountains[i].size / 100, mountains[i].y_pos + 46 * mountains[i].size / 100, mountains[i].x_pos + 70 * mountains[i].size / 100, mountains[i].y_pos + 80 * mountains[i].size / 100, mountains[i].x_pos + 57 * mountains[i].size / 100, mountains[i].y_pos + 68 * mountains[i].size / 100);
    triangle(mountains[i].x_pos + 57 * mountains[i].size / 100, mountains[i].y_pos + 46 * mountains[i].size / 100, mountains[i].x_pos + 42 * mountains[i].size / 100, mountains[i].y_pos + 73 * mountains[i].size / 100, mountains[i].x_pos + 57 * mountains[i].size / 100, mountains[i].y_pos + 68 * mountains[i].size / 100);
    triangle(mountains[i].x_pos - 9 * mountains[i].size / 100, mountains[i].y_pos + 39 * mountains[i].size / 100, mountains[i].x_pos - 31 * mountains[i].size / 100, mountains[i].y_pos + 80 * mountains[i].size / 100, mountains[i].x_pos - 9 * mountains[i].size / 100, mountains[i].y_pos + 74 * mountains[i].size / 100);
    triangle(mountains[i].x_pos - 9 * mountains[i].size / 100, mountains[i].y_pos + 74 * mountains[i].size / 100, mountains[i].x_pos - 9 * mountains[i].size / 100, mountains[i].y_pos + 39 * mountains[i].size / 100, mountains[i].x_pos + 16 * mountains[i].size / 100, mountains[i].y_pos + 73 * mountains[i].size / 100);
    triangle(mountains[i].x_pos + 20 * mountains[i].size / 100, mountains[i].y_pos - 1 * mountains[i].size / 100, mountains[i].x_pos + 34 * mountains[i].size / 100, mountains[i].y_pos + 32 * mountains[i].size / 100, mountains[i].x_pos + 23 * mountains[i].size / 100, mountains[i].y_pos + 28 * mountains[i].size / 100);
    triangle(mountains[i].x_pos + 23 * mountains[i].size / 100, mountains[i].y_pos + 28 * mountains[i].size / 100, mountains[i].x_pos + 21 * mountains[i].size / 100, mountains[i].y_pos - 1 * mountains[i].size / 100, mountains[i].x_pos + 13 * mountains[i].size / 100, mountains[i].y_pos + 32 * mountains[i].size / 100);
  }

  // Draw trees.
  for (var i = 0; i < trees_x.length; i++) {
    noStroke();
    fill(190, 95, 23); //tree trunk
    triangle(trees_x[i] + 67, floorPos_y, trees_x[i] + 82, floorPos_y - 16, trees_x[i] + 84, floorPos_y);
    triangle(trees_x[i] + 84, floorPos_y, trees_x[i] + 86, floorPos_y - 14, trees_x[i] + 101, floorPos_y);
    rect(trees_x[i] + 78, floorPos_y - 32, 12, 32);
    fill(34, 124, 17); //tree leaves
    triangle(trees_x[i] + 40, floorPos_y - 21, trees_x[i] + 83, floorPos_y - 61, trees_x[i] + 85, floorPos_y - 29);
    triangle(trees_x[i] + 84, floorPos_y - 29, trees_x[i] + 83, floorPos_y - 61, trees_x[i] + 128, floorPos_y - 20);
    triangle(trees_x[i] + 40, floorPos_y - 43, trees_x[i] + 82, floorPos_y - 80, trees_x[i] + 122, floorPos_y - 43);
    triangle(trees_x[i] + 50, floorPos_y - 69, trees_x[i] + 80, floorPos_y - 101, trees_x[i] + 115, floorPos_y - 68);
    triangle(trees_x[i] + 54, floorPos_y - 89, trees_x[i] + 83, floorPos_y - 116, trees_x[i] + 112, floorPos_y - 90);

  }
  // Draw canyons

  for (var i = 0; i < canyons.length; i++) {
    noStroke();
    fill(100, 155, 255);
    rect(canyons[i].x_pos, floorPos_y, canyons[i].width, width - floorPos_y);
  }

  // Draw collectable items
  for (var i = 0; i < collectables.length; i++) {
    fill(79, 195, 247);
    stroke(0);
    strokeWeight(0.5);
    triangle(collectables[i].x_pos - 21 * collectables[i].size / 100, collectables[i].y_pos + 12 * collectables[i].size / 100, collectables[i].x_pos + 7 * collectables[i].size / 100, collectables[i].y_pos + 12 * collectables[i].size / 100, collectables[i].x_pos - 7 * collectables[i].size / 100, collectables[i].y_pos + 32 * collectables[i].size / 100);
    line(collectables[i].x_pos - 13 * collectables[i].size / 100, collectables[i].y_pos + 12 * collectables[i].size / 100, collectables[i].x_pos - 7 * collectables[i].size / 100, collectables[i].y_pos + 32 * collectables[i].size / 100);
    line(collectables[i].x_pos - 1 * collectables[i].size / 100, collectables[i].y_pos + 12 * collectables[i].size / 100, collectables[i].x_pos - 7 * collectables[i].size / 100, collectables[i].y_pos + 32 * collectables[i].size / 100);
    triangle(collectables[i].x_pos - 21 * collectables[i].size / 100, collectables[i].y_pos + 12 * collectables[i].size / 100, collectables[i].x_pos - 16 * collectables[i].size / 100, collectables[i].y_pos + 5 * collectables[i].size / 100, collectables[i].x_pos - 13 * collectables[i].size / 100, collectables[i].y_pos + 12 * collectables[i].size / 100);
    triangle(collectables[i].x_pos - 16 * collectables[i].size / 100, collectables[i].y_pos + 5 * collectables[i].size / 100, collectables[i].x_pos - 13 * collectables[i].size / 100, collectables[i].y_pos + 12 * collectables[i].size / 100, collectables[i].x_pos - 7 * collectables[i].size / 100, collectables[i].y_pos + 5 * collectables[i].size / 100);
    triangle(collectables[i].x_pos - 7 * collectables[i].size / 100, collectables[i].y_pos + 5 * collectables[i].size / 100, collectables[i].x_pos - 13 * collectables[i].size / 100, collectables[i].y_pos + 12 * collectables[i].size / 100, collectables[i].x_pos - 1 * collectables[i].size / 100, collectables[i].y_pos + 12 * collectables[i].size / 100);
    triangle(collectables[i].x_pos - 1 * collectables[i].size / 100, collectables[i].y_pos + 12 * collectables[i].size / 100, collectables[i].x_pos - 7 * collectables[i].size / 100, collectables[i].y_pos + 5 * collectables[i].size / 100, collectables[i].x_pos + 3 * collectables[i].size / 100, collectables[i].y_pos + 5 * collectables[i].size / 100);
    triangle(collectables[i].x_pos + 3 * collectables[i].size / 100, collectables[i].y_pos + 5 * collectables[i].size / 100, collectables[i].x_pos - 1 * collectables[i].size / 100, collectables[i].y_pos + 12 * collectables[i].size / 100, collectables[i].x_pos + 7 * collectables[i].size / 100, collectables[i].y_pos + 12 * collectables[i].size / 100);
  }

pop();


  // Draw the game character - this must be last
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
  //////// Game character logic ///////
  // Logic to move

  if (isLeft) {
    if (gameChar_x > width * 0.2) {
      gameChar_x -= 5;
    } else {
      scrollPos += 5;
    }
  }

  if (isRight) {
    if (gameChar_x < width * 0.8) {
      gameChar_x += 5;
    } else {
      scrollPos -= 5; // negative for moving against the background
    }

  }
}

function keyPressed() {

  if (key == 'A' || keyCode == 37) {
    isLeft = true;
  }

  if (key == 'D' || keyCode == 39) {
    isRight = true;
  }

}

function keyReleased() {
  if (key == 'A' || keyCode == 37) {
    isLeft = false;
  }

  if (key == 'D' || keyCode == 39) {
    isRight = false;
  }
}
