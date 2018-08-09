$(document).ready(function() {
	// $('div.wrapper').addClass('scrollable scrollbar-macosx').scrollbar({'disableBodyScroll' : true});
	$('div.wrapper').addClass('scrollable scrollbar-macosx').scrollbar({'disableBodyScroll' : true});

    $(window).on("scroll", function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            // $('#toTop').fadeOut();
        }
    });
    $('#toTop').on("click", function () {
        // $("html, body").animate({scrollTop: 0}, 600);
		$('html, body').animate({
			scrollTop: $(".wrapper").offset().top
		}, 600);
		
		return false;
    });

});