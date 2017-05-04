var s;
var speed = 1;
var scl = 20;
var food;
var score = 0;




function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    pickLocation();

}

function draw() {
    background(51);

    if(s.eat(food)){
      pickLocation();
        score++;
    }

    s.death();
    s.update();
    s.show();

    fill(255,0,100);
    rect(food.x, food.y, scl, scl);


    textSize(56);
    textStyle(BOLD)
    text(score, width/2, scl*4);
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = this.createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -speed);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, speed);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(speed, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-speed, 0);
    }
}
