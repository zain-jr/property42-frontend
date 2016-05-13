// page init
jQuery(function(){
	initTabs();
	initAnchors();
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