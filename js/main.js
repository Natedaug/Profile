if($(window).width() > 640)
{

	var headerHeight = $('header').height();

	$(document).scroll(function() {
		var pos = $(document).scrollTop();
		console.log('Position: '+pos);
		// $('#contact').css('display', ((pos > headerHeight) ? 'block' : 'none'));

			var parallax = 150 + parseInt(pos * -0.3) + 'px';
			var rgba		 = (pos / headerHeight) * 1.1;
			console.log('Parallax: '+pos);
			$('.nathan').css('margin-top', parallax);
			$('header').css('background', 'rgba(0,0,0,' + rgba+')');
			$('.avatar').css('opacity', 1-rgba);
			console.log('rgba: '+rgba);
		
	});

}