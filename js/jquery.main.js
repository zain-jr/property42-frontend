// page init
jQuery(function(){
	initTabs();
	initAnchors();
	initCarousel();
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
}
