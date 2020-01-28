function preload() {}

function setup() {}

function draw() {}

function mouseClicked() {
  var url_string = window.location.href;
  var url = new URL(url_string);

  var check = url.searchParams.get("q1");
var next = document.getElementById('next1');
window.open('../q/q2.html?q1=0', '_self');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
