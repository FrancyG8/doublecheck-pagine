function preload() {}

function setup() {}

function draw() {
  $('#next1').click(function() {
    window.open('../q/q8.html?q7=' + check7, '_self');
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check7 = url.searchParams.get("q7");
console.log(check7);
