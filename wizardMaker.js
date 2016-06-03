$(document).ready(function(){
	var steps = $(".form2wiz fieldset");
	var count = steps.size();

	$("#submit").hide();
	$(".form2wiz").before("<ul class='inline' id='steps'></ul>");
	
	steps.each(function(i) {

		 var name = $(this).find("legend").html();
		$("#steps").append("<li id='stepDesc" + i + "'>Step " + (i + 1) + ": <span>" + name + "</span></li>");

	    $(this).wrap("<div id='step" + i + "'></div>");
	    $(this).append("<p id='step" + i + "commands'></p>");

	    if (i == 0) {				// first fieldset
	        createNextButton(i);    
	        selectStep(i);
	    }
	    else if (i == count - 1) {	// last fieldset
	        $("#step" + i).hide();
	        createPrevButton(i);
	    }
	    else {
	        $("#step" + i).hide();
	        createPrevButton(i);
	        createNextButton(i);
	    }
	})

	function createPrevButton(i) {

	    var stepName = "step" + i;

	    $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Prev' class='prev btn'>< Back</a>");

	    $("#" + stepName + "Prev").bind("click", function(e) {
			$("#submit").hide();

	        $("#" + stepName).hide();
	        $("#step" + (i - 1)).show();
	        selectStep(i - 1);
	    });
	}

	function createNextButton(i) {
	    var stepName = "step" + i;

	    $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Next' class='next btn'>Next ></a>");
	    $("#" + stepName + "Next").bind("click", function(e) {
			$("#submit").hide();

	        $("#" + stepName).hide();
	        $("#step" + (i + 1)).show();
	        selectStep(i + 1);

	        if (i + 2 == count)
	        	$("#submit").show();
	    });
	}

	function selectStep(i) {
	    $("#steps li").removeClass("current");
	    $("#stepDesc" + i).addClass("current");
	}



	// $("#" + stepName + "Prev").bind("click", function(e) {
	//     $("#submit").hide();
	// });

	// $("#" + stepName + "Next").bind("click", function(e) {
	//     if (i + 2 == count)
	//         $("#submit").show();
	// });

});