let fr = 60;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if (frameCount >= 150) {
    window.open('../fact/fact5w.html?q5=' + check5, '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check5 = url.searchParams.get("q5")

console.log(check5);
