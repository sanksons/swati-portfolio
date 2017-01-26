;
$(document).ready(function() {
	
	portfolio.InitApp();
	$('#loadMore').on('click', function(){
		$(this).hide();
		var showme =  portfolio.LoadMore();
		if (showme) {
		   $(this).show();
		}
	});
});

portfolio.InitApp = function() {
	portfolio.LoadMore();
}

portfolio.PrepareHTML4Data = function(slot) {
	
	var data = portfolio.data;
	$.each(
					data[slot],
					function(k, v) {
						var html = "<div class='holder'>"
								+ "<a href='images/zoom/"
								+ v.zoom
								+ "' class='zoomify slot_"
								+ slot
								+ "'>"
								+ "<img src='images/scribble_light.png' data-src='images/thumb/"
								+ v.thumb
								+ "' class='unviel' alt='No Image' />" + "</a>"
								+ "<p>" + v.content + "</p>" + "</div>";
						$("#columns").append(html);
					});
	$("img").unveil(200, function() {
		$(this).load(function() {
			$(this).removeClass('unviel', 3000);
			$(this).parents('div.holder').addClass('pin');
		});
	});
}


portfolio.LoadMore = function() {
	console.log(portfolio.currentSlot);
	portfolio.PrepareHTML4Data(portfolio.currentSlot);
    portfolio.SetZoom(portfolio.currentSlot);
    portfolio.currentSlot++;
    if(portfolio.data[portfolio.currentSlot] == undefined) {
    	console.log('end:' + portfolio.currentSlot);
    	return false;
	}
    return true;
}



portfolio.SetZoom = function(slot) {
	$('.slot_' + slot).magnificPopup({
		type : 'image',
		closeOnContentClick : true,
		closeBtnInside : false,
		fixedContentPos : true,
		mainClass : 'mfp-no-margins mfp-with-zoom',
		image : {
			verticalFit : true
		},
		zoom : {
			enabled : true,
			duration : 300
		// don't foget to change the duration also in CSS
		}
	});
}

