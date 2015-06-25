x$(window).load(function(e){
	x$('#header__icon').on('click', function (e) {
			e.preventDefault();
            x$('.site-pusher').toggleClass('menuaa');
            x$('.site-cache').css({'display':'block'});
      });
	x$('#site-cache').click(function(e){
		console.log('entre');
		x$('.site-cache').css({'display':'none'});
		x$('.site-pusher').removeClass('menuaa');
	});
	
});