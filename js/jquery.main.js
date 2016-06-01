// page init
jQuery(function(){
	initTabs();
	initAnchors();
	initCarousel();
	initLightbox();
});

$(document).on('click', '.propertyImage-slider-btn-next, .propertyImage-slider-btn-prev', function(){
	var windowSize = 6;
	var currentSlideNumber = parseInt($('#propertyImageCurrentSlide').text());
	var currentSlideRemainder = currentSlideNumber/ windowSize;
	var currentSlideRemainderCeil = Math.ceil(currentSlideRemainder);
	var currentSlideRemainderFloor = Math.floor(currentSlideNumber);
	var currentWindowNumber = parseInt($('.paginationCurrent-num-1').text());
	 
	 if(currentSlideRemainderCeil > currentWindowNumber)
	 {
		var stepsToMove = currentSlideRemainderCeil - currentWindowNumber;
		for(var i = 0; i< stepsToMove; i++){
			$('.propertyImage-pagination-btn-next-1').click();
		}	 
	 }
	 else if(currentSlideRemainderCeil < currentWindowNumber)
	 {
		var stepsToMove = currentWindowNumber - currentSlideRemainderCeil;
		for(var i = 0; i< stepsToMove; i++){
			$('.propertyImage-pagination-btn-prev-1').click();
		}
	 }
});

$(document).ready(function(){
	var paraentHeight = $('.overviewText-holder').height();
	var childHeight = $('.overviewText').height();
	
	if(childHeight > paraentHeight){
		$('.btn-showMore').css({
			'display':'block'
		});
	}
});
$(document).on('click', '.btn-showMore', function(){
	$('.overviewText-holder').toggleClass('height');
	
	if($('.overviewText-holder').hasClass('height')){
		$('.btn-showMore').text('Show More');
	}
	else {
		$('.btn-showMore').text('Less More');
	}
	
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
// smooth anchor links
function initAnchors() {
	/* global SmoothScroll */

	// simple case:
	new SmoothScroll({
		anchorLinks: '.smooth-scroll'
	});

	// common case:
	new SmoothScroll({
		extraOffset: $('.anchor-nav').height() || 0,
		anchorLinks: '.anchor-nav a, .side-nav a',
		activeClasses: 'link',
		wheelBehavior: 'ignore',
		animDuration: 800
	});

	// custom case:
	new SmoothScroll({
		anchorLinks: '.inner-links a',
		container: '.inner-container',
		activeClasses: 'parent'
	});
}

// scroll gallery init
function initCarousel() {
	jQuery('.step-slider').scrollGallery({
		mask: '.mask',
		slider: '.slideset',
		slides: '.slide',
		btnPrev: '.btn-prev',
		btnNext: '.btn-next',
		pagerLinks: '.pagination li',
		autoRotation: true,
		switchTime: 3000,
		animSpeed: 500,
		swipeGap: true,
		step: 1
	});
	
	jQuery('.company-logos-sliders').scrollGallery({
		mask: '.mask',
		slider: '.slideset',
		slides: '.slide',
		btnPrev: '.btn-prev',
		btnNext: '.btn-next',
		pagerLinks: '.pagination li',
		autoRotation: true,
		switchTime: 3000,
		animSpeed: 500,
		swipeGap: false
	});

	jQuery('.propertyImage-slider').scrollGallery({
		mask: '.mask',
		slider: '.slideset',
		slides: '.slide',
		btnPrev: '.propertyImage-slider-btn-prev',
		btnNext: '.propertyImage-slider-btn-next',
		pagerLinks: '.propertyImage-pagination .propertyImage-slide',
		autoRotation: false,
		circularRotation: true,
		switchTime: 3000,
		animSpeed: 500,
		swipeGap: true
	});
	
	jQuery('.propertyImage-pagination').scrollGallery({
		mask: '.propertyImage-mask',
		slider: '.propertyImage-slideset',
		slides: '.propertyImage-slide',
		btnPrev: '.propertyImage-pagination-btn-prev-1',
		btnNext: '.propertyImage-pagination-btn-next-1',
		pagerLinks: '.pagination li',
		autoRotation: false,
		circularRotation: true,
		switchTime: 3000,
		animSpeed: 500,
		currentNumber: '.paginationCurrent-num-1',
		totalNumber: '.total-num-1',
		swipeGap: true
	});
}
