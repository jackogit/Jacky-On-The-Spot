/*
$(document).ready(function(){
	$(".time").mouseover(function(){
		$(this).animate({
			"color" : "blue"
		})
	});
	
});  */
$(document).ready(function(){
	  $("body").mouseenter(function() {
    		$("p").fadeOut(2000);
  		});
	  $("body").mouseenter(function() {
	  		$("p").fadeIn(2000);
	  });
});

 ////function calculateSquareHorFootage() {
 //	var footLength = document.getElementById("footLength").value;
 //	var footWidth = document.getElementById("footWidth").value;
//	var calculateSquareHorFootage = footWidth * footLength;
 //	document.getElementById("sqFootage").innerHTML = calculateSquareHorFootage;
 //}

 //document.getElementById("clickme").onclick = calculateSquareHorFootage;

