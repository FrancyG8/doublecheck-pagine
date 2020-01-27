let fr = 60; //--3000 frames erano necessari con la connessione del Poli

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if(frameCount >= 3600){ //--Davvero il framerate è legato alla connessione?!
    tempoScaduto();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function tempoScaduto(){
  window.open('../right-wrong/timeisup1.html', '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check = url.searchParams.get("dummy")

if ( check == "test" ) {
  console.log("è giusto!!!")
}
