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

$('.hidden-checkfield').change(function(){
    if($(this).is(":checked")) {
        $('.registration-form').addClass("agent-info");
    } else {
        $('.registration-form').removeClass("agent-info");
    }
});