 
 $(function() {
	 if ($(".addPropertyFormContianer")[0]){
		handleAddPropertyFormScrolling();
		$(document).on("scroll", onScroll);
	 }
});

$(window).scroll(function(){
	if ($(".addPropertyFormContianer")[0]){
		if ($(this).scrollTop() >= $('#header').height()) {
			$('.addPropertyFormContianer').addClass('fixed-position');
		} else {
			$('.addPropertyFormContianer').removeClass('fixed-position');
		}
	}
});


$(".searchable-select").select2({
	placeholder: "Select",
  allowClear: true
});

// page init
jQuery(function(){
	initTabs();
});

// content tabs init
function initTabs() {
	jQuery('.tabset').contentTabs({
		tabLinks: 'a'
	});
}