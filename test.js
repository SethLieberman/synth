$( document ).ready(function() {

var audio = {
	beat1:new Audio('audio/808.mp3'),
	beat2:new Audio('audio/beatnick.mp3'),
	beat3:new Audio('audio/blast.mp3'),
	beat4:new Audio('audio/synth.mp3'),
	beat5:new Audio('audio/atnight.mp3'),
	beat6:new Audio('audio/fun.mp3'),
	beat7:new Audio('audio/resurrection.mp3'),
	beat8:new Audio('audio/vizor.mp3'),
	beat9:new Audio('audio/wee.mp3'),
	beat10:new Audio('audio/downer.mp3'),
	beat11:new Audio('audio/cb.mp3'),
	beat12:new Audio('audio/ch.mp3'),
	beat13:new Audio('audio/cl.mp3'),
	beat14:new Audio('audio/cp.mp3'),
	beat15:new Audio('audio/ma.mp3')
}

$("#stop").click(function () {
    audio.pause();
    audio.currentTime = 0;
});


document.getElementById("play1").addEventListener("click", function(){
	audio.beat1.loop = true;
	audio.beat1.play();
});
document.getElementById("pause1").addEventListener("click", function(){
	audio.beat1.pause();
  
});

document.getElementById("play2").addEventListener("click", function(){
	audio.beat2.loop = true;
	audio.beat2.play();
});
document.getElementById("pause2").addEventListener("click", function(){
	audio.beat2.pause();
  
});

document.getElementById("play3").addEventListener("click", function(){
	audio.beat3.loop = true;
	audio.beat3.play();
});
document.getElementById("pause3").addEventListener("click", function(){
	audio.beat3.pause();
  
});

document.getElementById("play4").addEventListener("click", function(){
	audio.beat4.loop = true;
	audio.beat4.play();
});
document.getElementById("pause4").addEventListener("click", function(){
	audio.beat4.pause();
  
});

document.getElementById("play5").addEventListener("click", function(){
	audio.beat5.loop = true;
	audio.beat5.play();
});
document.getElementById("pause5").addEventListener("click", function(){
	audio.beat5.pause();
});

document.getElementById("play6").addEventListener("click", function(){
	audio.beat6.loop = true;
	audio.beat6.play();
});
document.getElementById("pause6").addEventListener("click", function(){
	audio.beat6.pause();
  
});

document.getElementById("play7").addEventListener("click", function(){
	audio.beat7.loop = true;
	audio.beat7.play();
});
document.getElementById("pause7").addEventListener("click", function(){
	audio.beat7.pause();
  
});

document.getElementById("play8").addEventListener("click", function(){
	audio.beat8.loop = true;
	audio.beat8.play();
});
document.getElementById("pause8").addEventListener("click", function(){
	audio.beat8.pause();
  
});

document.getElementById("play9").addEventListener("click", function(){
	audio.beat9.loop = true;
	audio.beat9.play();
});
document.getElementById("pause9").addEventListener("click", function(){
	audio.beat9.pause();
  
});

document.getElementById("play10").addEventListener("click", function(){
	audio.beat10.loop = true;
	audio.beat10.play();
});
document.getElementById("pause10").addEventListener("click", function(){
	audio.beat10.pause();
  
});
document.getElementById("play11").addEventListener("click", function(){
	audio.beat11.loop = true;
	audio.beat11.play();
});
document.getElementById("pause11").addEventListener("click", function(){
	audio.beat11.pause();
  
});
document.getElementById("play12").addEventListener("click", function(){
	audio.beat12.loop = true;
	audio.beat12.play();
});
document.getElementById("pause12").addEventListener("click", function(){
	audio.beat12.pause();
  
});

document.getElementById("play13").addEventListener("click", function(){
	audio.beat13.loop = true;
	audio.beat13.play();
});
document.getElementById("pause13").addEventListener("click", function(){
	audio.beat13.pause();
  
});

document.getElementById("play14").addEventListener("click", function(){
	audio.beat14.loop = true;
	audio.beat14.play();
});
document.getElementById("pause14").addEventListener("click", function(){
	audio.beat14.pause();
  
});

document.getElementById("play15").addEventListener("click", function(){
	audio.beat15.loop = true;
	audio.beat15.play();
});
document.getElementById("pause15").addEventListener("click", function(){
	audio.beat15.pause();
  
});


});


// sounds object-instrument...array of sounds 

