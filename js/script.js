jQuery(function() {
	//Scroll Top
	var topBtn = $('ul#btnPageTop');    
	topBtn.hide();
	$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
					topBtn.fadeIn();
			} else {
					topBtn.fadeOut();
			}
	});

	topBtn.click(function () {
			$('body,html').animate({
					scrollTop: 0
			}, 100);
			return false;
	});

	// Ajustment - Menu Btn Click
	var scroll_top = $(window).scrollTop();

	$("header ul#btnMenu li").on('click',function(){
		$("nav").animate({
			scrollTop: 0
		}, 0);
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			fix();
		}
		else{
			$(this).removeClass('active');
			nofix();
		}
	});

	function fix(){
		scroll_top = $(window).scrollTop();//bodyFix
		$('body').addClass('modeNav');//bodyFix
	}
	function nofix(){
		$('body').removeClass('modeNav');//bodyNofix
	}
	
	$("header ul#gNavi li a").on('click',function(){
		$('body').removeClass('modeNav');
		$('header ul#btnMenu li').removeClass('active');
	});

 // Ancher Link
	var headerHeight = 50;
	var urlHash = location.hash;
	if(urlHash) {
			$('body,html').stop().scrollTop(0);
			setTimeout(function(){
					var target = $(urlHash);
					var position = target.offset().top - headerHeight;
					$('body,html').stop().animate({scrollTop:position}, 400, 'swing');
			}, 100);
	}
	$('a[href^="#"]').click(function() {
			var href= $(this).attr("href");
			var target = $(href);
			var position = target.offset().top - headerHeight;
			$('body,html').stop().animate({scrollTop:position}, 400, 'swing');   
	});

 // Scroll Fade
	$(window).on('load scroll',function (){
		$('.scrollFade').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height + 10){
				$(this).addClass('active');
			}
		});
	});

 // Tab
	$(document).ready(function() {
    $('.blockTab').on('click', function() {
      var index = $(this).index();

      $('.blockTab').removeClass('select');
      $(this).addClass('select');

      $('.blockMain').removeClass('isShow');
      $('.blockMain').eq(index).addClass('isShow');
    });
  });
});


