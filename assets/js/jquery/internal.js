// JavaScript Document
// JavaScript Document
$(function() {
	$.preloadCssImages();

	/* Adjust the heights of #menu-section and #content to be equal */
	function adjustHeights() {		
		hMenu = $('#menu-section').outerHeight();
		hContent = $('#content').outerHeight();
		mHeight = hMenu > hContent ? hMenu : hContent;
		$('#menu-section, #content').height(mHeight);
	}
	
	/* On window resize:
	   1) Clear the height settings for #menu-section and #content.
       2) Call adjustHeights to set height of each */
	$(window).resize(function() {
		$('#menu-section, #content').css("height","auto");
		adjustHeights();
	});
	
	/* Set heights of #menu-section and #content the first time */
	adjustHeights(); 


});