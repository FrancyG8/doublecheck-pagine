let fr = 60;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  var url_string = window.location.href;
  var url = new URL(url_string);

  var check = url.searchParams.get("q1")

  if (frameCount >= 150 && check == "0") {
    tempoScaduto();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function tempoScaduto(){
  window.open('../fact/fact1w.html?q1=0', '_self');
}
