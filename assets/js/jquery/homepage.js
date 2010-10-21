// JavaScript Document
$(function() {
		   	   
	$.preloadCssImages();
	
	/* NEWS PREVIEW STRIP - Setup automatic scroll at 10 seconds */
	$("#news-preview").serialScroll({
		items:'div',
		duration:400, // 0.4 seconds duration to switch
		force:true,
		axis:'y',
		easing:'linear',
		lazy:true,// NOTE: it's set to true, meaning you can add/remove/reorder items and the changes are taken into account.
		interval:10000, // yeah! I now added auto-scrolling
		step:1 // scroll 1 news each time
	});	

	/* Adjust the heights of #features and #highlights to be equal */
	function adjustHeights() {		
		hFeatures = $('#features').outerHeight();
		hForestry = $('#highlights').outerHeight();
		mHeight = hFeatures > hForestry ? hFeatures : hForestry;
		$('#features, #highlights').height(mHeight);
	}
	
	/* On window resize:
	   1) Clear the height settings for #features and #highlights.
       2) Call adjustHeights to set height of each */
	$(window).resize(function() {
		$('#features, #highlights').css("height","auto");
		adjustHeights();
	});
	
	/* Set heights of #features and #highlights the first time */
	adjustHeights(); 
});
