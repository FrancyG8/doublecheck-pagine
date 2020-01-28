let fr = 50;
var sbagliato = "0";

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if(frameCount >= 3000){
    tempoScaduto();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function tempoScaduto(){
  window.open('../right-wrong/timeisup2.html?q2=' + sbagliato, '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check = url.searchParams.get("q1")

var pallino1 = document.getElementById("domanda1");
if ( check == "1" ) {
  console.log('ok');
  pallino1.style('color', '#ffffff');
} else if ( check == "0") {
  console.log('no');
  pallino1.style('color', '#000000');
}
