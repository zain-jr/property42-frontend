$(function() {
     if ($(".addPropertyFormContainer")[0]){
        handleAddPropertyFormScrolling();
		$(document).on("scroll", onScroll);
     }
});

$(window).scroll(function(){
	if ($(".addPropertyFormContainer")[0]){
		if ($(this).scrollTop() >= $('#header').height()) {
			$('.addPropertyFormContainer').addClass('fixed-position');
		} else {
			$('.addPropertyFormContainer').removeClass('fixed-position');
		}
	}
});

// page init
jQuery(function(){
	initTabs();
});

// content tabs init
function initTabs() {
	jQuery('.tabset').contentTabs({
		tabLinks: 'a',
		effect: 'fade',
		animSpeed:200,
		switchTime:1000
	});
}
