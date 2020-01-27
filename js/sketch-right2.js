let fr = 60;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if(frameCount >= 150){
    tempoScaduto();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// function rispostaSbagliata(){
//   window.open('../right-wrong/wrong1.html', '_self');
// }
//
// function rispostaGiusta(){
//   window.open('../right-wrong/right1.html', '_self');
// }

function tempoScaduto(){
  window.open('../fact/fact2r.html', '_self');
}
