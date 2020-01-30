function preload() {}

function setup() {}

function draw() {}

function mouseClicked() {
  var next = document.getElementById('next1');
  window.open('../q/q6.html?q5=' + check5, '_self');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check5 = url.searchParams.get("q5");
console.log(check5);
