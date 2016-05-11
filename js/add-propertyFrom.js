function previewAddPropertyImg(file, target)
 {
	previewFile(file, target);
	$(file).closest('li').find('.picture-name').removeClass('disableInput');
	$(file).closest('li').find('.image-holder').css({
		 'opacity':'1',
		 'z-index':'5'
	});
	$(file).closest('.file-uploader').addClass('after-none');
	$(file).closest('li').find('.picture-name').focus();
 }
 
 $(document).on('click', '.propertyDocumentCloseBtn', function(){
	 $(this).closest('.image-holder').css({
		 'opacity':'0',
		 'z-index':'-1'
	 });
	 $(this).closest('.file-uploader').removeClass('after-none');
	 $(this).closest('li').find('.picture-name').addClass('disableInput');
	 $(this).closest('li').find('.picture-name').val('');
 });
 
 $(document).on('click', '.listing-opener', function(){
	 $('.addPropertyFormContianer').toggleClass('sectionListingActive');
 });
 
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.scrollAddPropertyNavLink').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos+50 && refElement.position().top + refElement.height() > scrollPos) {
			$(currLink).closest('li').siblings().removeClass('activeAddPropertyNavLink');
			$(currLink).closest('li').addClass('activeAddPropertyNavLink');
        }
        else{
            currLink.closest('li').removeClass('activeAddPropertyNavLink');
        }
    });
}

function handleAddPropertyFormScrolling()
{
	$('.scrollAddPropertyNavLink').click(function() {
			$('.addPropertyFormContianer').removeClass('sectionListingActive');
			$(this).closest('li').siblings().removeClass('activeAddPropertyNavLink');
			$(this).closest('li').addClass('activeAddPropertyNavLink');
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			console.log(target.offset());
			if (target.length) {
				$('html, body').animate({
				scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});	
}