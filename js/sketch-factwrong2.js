function preload() {}

function setup() {}

function draw() {}

function mouseClicked() {
  var next = document.getElementById('next1');
  window.open('../q/q3.html?q2=' + check2, '_self');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check2 = url.searchParams.get("q2");
console.log(check2);
