let fr = 50;

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
  window.open('../right-wrong/timeisup2.html?q2=', '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check = url.searchParams.get("dummy")

if ( check == "test" ) {
  console.log("è giusto!!!")
}
