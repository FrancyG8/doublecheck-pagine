function preload() {}

function setup() {}

function draw() {
  var url_string = window.location.href;
  var url = new URL(url_string);

  var check = url.searchParams.get("q1")

  nextb.mousePressed = function() {
      window.open('../q/q2.html?q1=1', '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
