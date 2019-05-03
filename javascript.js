
$(document).ready(function(){
	$('.btn-toggle-nav').click(function(){
		$('.menu_list').toggleClass('active');
	});	
});

$(window).scroll(function(){
	if($(document).scrollTop() > 50) {
		
	} else {		
		$('.menu_list').removeClass('active');
	}
})

//$(document).ready(function(){
	

	//$('.nextbtn').click(function nextSlide(nextSlider){
	function changeSlide(direction) {	
		var currentImg = $('.active');
		var nextImg = currentImg.next();
		var prevImg = currentImg.prev();

		if(direction == 'next') {
			if(nextImg.length) {
				nextImg.addClass('active');
			} else {
				$('.slides img').first().addClass('active');
			}
		} else {
			if(prevImg.length) {
				prevImg.addClass('active');
			} else {
				$('.slides img').last().addClass('active');
			}
		}	

		currentImg.removeClass('active');
	}
//})