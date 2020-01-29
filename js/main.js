$(document).ready(function() {


//--PARALLAX
  var currentX = '';
  var currentY = '';
  var movementConstant = .015;
  $(document).mousemove(function(e) {
    if(currentX == '') currentX = e.pageX;
    var xdiff = e.pageX - currentX;
    currentX = e.pageX;
     if(currentY == '') currentY = e.pageY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY;
    $('.immagini').each(function(i, el) {
        var movement = (i + 2) * (xdiff * movementConstant);
  	  var movementy = (i + 2) * (ydiff * movementConstant);
        var newX = $(el).position().left + movement;
  	  var newY = $(el).position().top + movementy;
        $(el).css('left', newX + 'px');
  	  $(el).css('top', newY + 'px');
    });
  });


//--BARRA TEMPO
  var tempo = gsap.timeline();
  //--Trasformazione della barra
  tempo.to(".rettangolo-rosso", {duration: 30, scaleY: 0, transformOrigin: "bottom", backgroundColor: "#FF0000"});
  // --Lampeggio da 15sec in poi
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 15, opacity: 0}, "<"); //1
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //2
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //3
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //4
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //5
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //6
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //7
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //8
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //9
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //10
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //11
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //12
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //13
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //14
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //15
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //16
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //17
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //18
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //19
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //20
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //21
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //22
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //23
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //24
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //25
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //26
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //27
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //28
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //29
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //30


//--TRANSIZIONE
  window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
  });


//--CLICK FUNCTION
  var giusto = "1";
  var sbagliato = "0";

  //--Question 1
  $('#RIGHT01').click(function() {
    window.open('../right-wrong/right1.html?q1=' + giusto, '_self');
  });
  $('#WRONG01').click(function() {
    window.open('../right-wrong/wrong1.html?q1=' + sbagliato, '_self');
  });

  //--Question 2
  $('#RIGHT02').click(function() {
    window.open('../right-wrong/right2.html?q2=' + giusto, '_self');
  });
  $('#WRONG02').click(function() {
    window.open('../right-wrong/wrong2.html?q2='+ sbagliato, '_self');
  });
  var tempo = gsap.timeline(); //--Rettangolo che pulsa nel fact
  tempo.to("#ZOOMhint2", {duration: 0.5, delay: 0.5, opacity: 0});
  tempo.to("#ZOOMhint2", {duration: 0.5, delay: 0.5, opacity: 1}, "<");
  tempo.to("#ZOOMhint2", {duration: 0.5, delay: 0.5, opacity: 0}, "<");
  tempo.to("#ZOOMhint2", {duration: 0.5, delay: 0.5, opacity: 1}, "<");
  tempo.to("#ZOOMhint2", {duration: 0.5, delay: 0.5, opacity: 0}, "<");
  tempo.to("#ZOOMhint2", {duration: 0.5, delay: 0.5, opacity: 1}, "<");

  //--Question 3
  $('#RIGHT03').click(function() {
    window.open('../right-wrong/right3.html', '_self');
  });
  $('#WRONG03').click(function() {
    window.open('../right-wrong/wrong3.html', '_self');
  });

  //--Question 4
  $('#RETINO04').hide();
  $('#RIGHT04').click(function() {
    window.open('../right-wrong/right4.html', '_self');
    $('#RETINO04').fadeIn();
  });
  $('#WRONG04').click(function() {
    window.open('../right-wrong/wrong4.html', '_self');
  });
  var tempo = gsap.timeline(); //--Rettangolo che pulsa nel fact
  tempo.to("#ZOOMhint4", {duration: 0.5, delay: 0.5, opacity: 0});
  tempo.to("#ZOOMhint4", {duration: 0.5, delay: 0.5, opacity: 1}, "<");
  tempo.to("#ZOOMhint4", {duration: 0.5, delay: 0.5, opacity: 0}, "<");
  tempo.to("#ZOOMhint4", {duration: 0.5, delay: 0.5, opacity: 1}, "<");
  tempo.to("#ZOOMhint4", {duration: 0.5, delay: 0.5, opacity: 0}, "<");
  tempo.to("#ZOOMhint4", {duration: 0.5, delay: 0.5, opacity: 1}, "<");

  //--Question 5
  $('#RIGHT05').click(function() {
    window.open('../right-wrong/right5.html', '_self');
  });
  $('#WRONG05').click(function() {
    window.open('../right-wrong/wrong5.html', '_self');
  });

  //--Question 6
  var flag01 = 0;
  var flag02 = 0;
  var flag03 = 0;
  var flag04 = 0;
  $('#RETINOcatalonia01').hide();
  $('#RETINOcatalonia02').hide();
  $('#RETINOcatalonia03').hide();
  $('#RETINOcatalonia04').hide();
  $('#RIGHT06primo').click(function() {
    $('#RETINOcatalonia01').show();
    flag01 = 1;
    if (flag01 == 1 && flag02 == 1 && flag03 == 1 && flag04 == 1) {
      window.open('../right-wrong/right6.html', '_self');
    }
  });
  $('#RIGHT06secondo').click(function() {
    $('#RETINOcatalonia02').show();
    flag02 = 1;
    if (flag01 == 1 && flag02 == 1 && flag03 == 1 && flag04 == 1) {
      window.open('../right-wrong/right6.html', '_self');
    }
  });
  $('#RIGHT06terzo').click(function() {
    $('#RETINOcatalonia03').show();
    flag03 = 1;
    if (flag01 == 1 && flag02 == 1 && flag03 == 1 && flag04 == 1) {
      window.open('../right-wrong/right6.html', '_self');
    }
  });
  $('#RIGHT06quarto').click(function() {
    $('#RETINOcatalonia04').show();
    flag04 = 1;
    if (flag01 == 1 && flag02 == 1 && flag03 == 1 && flag04 == 1) {
      window.open('../right-wrong/right6.html', '_self');
    }
  });
  $('#WRONG06').click(function() {
    window.open('../right-wrong/wrong6.html', '_self');
  });
  var tempo = gsap.timeline(); //--Rettangolo che pulsa nel fact
  tempo.to("#ZOOMhint6", {duration: 0.5, delay: 0.5, opacity: 0});
  tempo.to("#ZOOMhint6", {duration: 0.5, delay: 0.5, opacity: 1}, "<");
  tempo.to("#ZOOMhint6", {duration: 0.5, delay: 0.5, opacity: 0}, "<");
  tempo.to("#ZOOMhint6", {duration: 0.5, delay: 0.5, opacity: 1}, "<");
  tempo.to("#ZOOMhint6", {duration: 0.5, delay: 0.5, opacity: 0}, "<");
  tempo.to("#ZOOMhint6", {duration: 0.5, delay: 0.5, opacity: 1}, "<");

  //--Question 7
  $('#RIGHT07').click(function() {
    window.open('../right-wrong/right7.html', '_self');
  });
  $('#WRONG07').click(function() {
    window.open('../right-wrong/wrong7.html', '_self');
  });

  //--Question 8
  $('#RIGHT08').click(function() {
    window.open('../right-wrong/right8.html', '_self');
  });
  $('#WRONG08').click(function() {
    window.open('../right-wrong/wrong8.html', '_self');
  });

  //--Question 9
  $('#RIGHT09').click(function() {
    window.open('../right-wrong/right9.html', '_self');
  });
  $('#WRONG09').click(function() {
    window.open('../right-wrong/wrong9.html', '_self');
  });

  //--Question 10
  $('#RIGHT10').click(function() {
    window.open('../right-wrong/right10.html', '_self');
  });
  $('#WRONG10').click(function() {
    window.open('../right-wrong/wrong10.html', '_self');
  });

  //--Question 11
  $('#RIGHT11').click(function() {
    window.open('../right-wrong/right11.html', '_self');
  });
  $('#WRONG11').click(function() {
    window.open('../right-wrong/wrong11.html', '_self');
  });

  //--Question 12
  var merkel01 = 0;
  var merkel02 = 0;
  $('#RETINOmerkel1').hide();
  $('#RETINOmerkel2').hide();
  $('#merkelOK1').click(function() {
    $('#RETINOmerkel1').show();
    merkel01 = 1;
    if (merkel01 == 1 && merkel02 == 1) {
      window.open('../right-wrong/right12.html', '_self');
    }
  });
  $('#merkelOK2').click(function() {
    $('#RETINOmerkel2').show();
    merkel02 = 1;
    if (merkel01 == 1 && merkel02 == 1) {
      window.open('../right-wrong/right12.html', '_self');
    }
  });
  $('#merkelNO').click(function() {
    window.open('../right-wrong/wrong12.html', '_self');
  });
  var tempo = gsap.timeline(); //--Rettangolo che pulsa nel fact
  tempo.to("#ZOOMhint12", {duration: 0.5, delay: 0.5, opacity: 0});
  tempo.to("#ZOOMhint12", {duration: 0.5, delay: 0.5, opacity: 1}, "<");
  tempo.to("#ZOOMhint12", {duration: 0.5, delay: 0.5, opacity: 0}, "<");
  tempo.to("#ZOOMhint12", {duration: 0.5, delay: 0.5, opacity: 1}, "<");
  tempo.to("#ZOOMhint12", {duration: 0.5, delay: 0.5, opacity: 0}, "<");
  tempo.to("#ZOOMhint12", {duration: 0.5, delay: 0.5, opacity: 1}, "<");

  //--Animazione
  $('#testuale').hide();
  setTimeout(function(){
    $('#testuale').fadeIn();
  }, 3000);

});
