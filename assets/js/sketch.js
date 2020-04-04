// lisence (MIT)
// Bill BIllions, Box52 Media llc.
// http://bigkahuna.home.blog
// http://williamrobertson28.wixsite.cm/bigkahunasports
// Code for: https://kingbill404.github.io/snake

let s;
let scl = 8;
let food;

function setup() {
    createCanvas(720, 401);
    s = new Snake();
    frameRate(12);
    pickLocation();
}

function pickLocation() {
    let cols = floor(width / scl);
    let rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function mousePressed() {
    s.total++;
}


// Draw The Game Loop On The Canvas
function draw() {
    background(32);
    if (s.eat(food)) {
        pickLocation();
    }
    s.death();
    s.update();
    s.show();
    fill(20, 260, 250);
    rect(food.x, food.y, scl, scl);
}

// Keyboard Controls:
function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}