function preload() {}

function setup() {}

function draw() {}

function mouseClicked() {
  if (check12 == 12) {
    var next = document.getElementById('next1');
    window.open('../an-right.html?q12=' + check12, '_self'); //--if per l'animazione corretta
  } else if (check12 < 12) {
    var next = document.getElementById('next1');
    window.open('../an-wrong.html?q12=' + check12, '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check12 = url.searchParams.get("q12");
console.log(check12);
