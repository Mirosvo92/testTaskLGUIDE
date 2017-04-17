$(document).ready(function() {
	
	//SVG Fallback
	if(!Modernizr.svg) {
	
		$("img[src*='svg']").attr("src", function() {
		
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	
	//hover fc
	$('.hov-fc').hover(function(){
	
		$(this).find('.hov-fc_active').css("display", "block");
		}, function(){
		$(this).find('.hov-fc_active').css("display", "none");
	});
	
	//pop up window
	$(".play-video-button").on("click", function(e) {
	
        e.preventDefault();
		$(".video-modal-window").css("display", "block").hide().fadeIn(400);		
	});
	
    $(".close-video").on("click", function() {
	
        $(".video-modal-window").fadeOut(400);
	});
	
    //for calendar setting
	function addFreeplase(num){
	
		if ( $(".datepicker--cell[data-date=" + num + "]").length > 1) {
			$(".datepicker--cell[data-date=" + num + "]:last-child").addClass("free-places");
		}else{
			$(".datepicker--cell[data-date=" + num + "]").addClass("free-places");
		}
	}
	
	addFreeplase(2);
	addFreeplase(19);
	addFreeplase(15);
	addFreeplase(5);
	addFreeplase(30);
	
	function addBusyplaces(num){
	
		if ( $(".datepicker--cell[data-date=" + num + "]").length > 1) {
			$(".datepicker--cell[data-date=" + num + "]:last-child").addClass("free-places");
		}else{
			$(".datepicker--cell[data-date=" + num + "]").addClass("busy-places");
		}
	}
	
	addBusyplaces(5);
	addBusyplaces(10);
	addBusyplaces(14);
	addBusyplaces(26);
	
	// for block ticket prices
	$('.ticket-buy').hover(function(){
	
		$(this).parent().css({"margin-top": "50px", "border-color": "#f79038"});
		}, function(){
		$(this).parent().css({"margin-top": "69px", "border-color": "#eceded"});
	});
	
	//Chrome Smooth Scroll
    try {
		$.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
		}
		} catch(err) {
	}; 
	
	//for animate
	if ($(window).width() >= '992') {
	
		$('.video-about-us').animated("rubberBand", "fadeInDown");
		$('.photo').animated("fadeInLeftBig", "fadeInUp");
		$('.photo-town, .ticket-prices-adults').animated("fadeInLeftBig", "fadeInDown");
		$('.description, .ticket-prices-children').animated("fadeInRightBig", "fadeInDown");
	}
}); 