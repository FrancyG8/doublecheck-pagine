let fr = 60;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if (frameCount >= 90) {
    window.open('../fact/fact10r.html?q10=' + check10, '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check10 = url.searchParams.get("q10");

console.log(check10);
