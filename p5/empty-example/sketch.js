var s;
var speed = 1;
function setup() {
createCanvas(600,600);
s = new Snake()
}

function draw() {
  background(51);
  s.update();
  s.show();
}


function keyPressed() {
    if (keyCode === UP_ARROW){
        s.dir(0, -speed);
    }else if (keyCode === DOWN_ARROW){
        s.dir(0,speed);
    }else if (keyCode === RIGHT_ARROW) {
        s.dir(speed, 0);
    }else if (keyCode === LEFT_ARROW) {
        s.dir(-speed, 0);
    }
}
