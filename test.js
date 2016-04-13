$( document ).ready(function() {


var audio = new Audio('audio/808.mp3');
var audio1 = new Audio('audio/beatnick.mp3');
var audio2 = new Audio('audio/blast.mp3');
var audio3 = new Audio('audio/cy0000.mp3');
var audio4 = new Audio('audio/atnight.mp3');
var audio5 = new Audio('audio/fun.mp3');
var audio6 = new Audio('audio/resurrection.mp3');
var audio7 = new Audio('audio/vizor.mp3');
var audio8 = new Audio('audio/wee.mp3');
var audio9 = new Audio('audio/downer.mp3');

document.getElementById("play").addEventListener("click", function(){
	audio.play();
});
document.getElementById("stop").addEventListener("click", function(){
	audio.pause();
  
});

document.getElementById("play1").addEventListener("click", function(){
	audio1.play();
});
document.getElementById("stop1").addEventListener("click", function(){
	audio1.pause();
  
});

document.getElementById("play2").addEventListener("click", function(){
	audio2.play();
});
document.getElementById("stop2").addEventListener("click", function(){
	audio2.pause();
  
});

document.getElementById("play3").addEventListener("click", function(){
	audio3.play();
});
document.getElementById("stop3").addEventListener("click", function(){
	audio3.pause();
  
});
});