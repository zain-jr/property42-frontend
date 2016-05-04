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
		$('.company-logo').removeClass('hover');
		$('.picture-holder').css({
			'display':'none'
		});
    }
});
 function previewAddPropertyImg(file, target)
 {
	previewFile(file, target);
	$(file).closest('.company-logo').find('.picture-holder').css({
		 'display':'block'
	});
	$(file).closest('.company-logo').addClass('hover');
 }
 
 $(document).on('click', '.delete', function(){
	 $(this).closest('.company-logo').find('.company-profileP').attr('src', '');
	 $(this).closest('.company-logo').find('.company-profileP').attr('alt', '');
	 $(this).closest('.company-logo').removeClass('hover');
	 $(this).closest('.company-logo').find('.picture-holder').css({
		 'display':'none'
	 });
 });
 