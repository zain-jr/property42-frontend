$(document).ready(function() {
    $('.feature-block').find('.holder').hide();
	 $('.feature-block').find('.form-heading').hide();
});
$(document).on('click', '.feature-blockOpener', function(){
	$(this).toggleClass('active');
	$('.feature-block').find('.holder').slideToggle();
	$('.feature-block').find('.form-heading').slideToggle();
});

function previewAddPropertyImg(file, target)
 {
	previewFile(file, target);
	$(file).closest('li').addClass('image-loaded');
	$(file).closest('li').find('.picture-name').focus();
 }
 
 $(document).on('click', '.propertyDocumentCloseBtn', function(){
	 $(this).closest('li').find('.picture-name').val('');
	 $(this).closest('li').find('img').attr('src', '#');
	 $(this).closest('li').removeClass('image-loaded');
 });

$(document).on('focusin', '.PriceField', function(){
	$('.calculatedPrice').removeClass('priceShow');
	$('.calculatedPrice').addClass('priceShow');
});
$(document).on('focusout', '.PriceField', function(){
	$('.calculatedPrice').removeClass('priceShow');
});