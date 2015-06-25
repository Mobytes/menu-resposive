x$(window).load(function(e){
	x$('#header__icon').on('click', function (e) {
			e.preventDefault();
            x$('.site-pusher').toggleClass('menuaa');
            x$('#site-cache').toggleClass('site-cache');
      });
		x$('#site-cache').click(function(e){
		console.log('entre');
        x$('.site-pusher').toggleClass('menuaa');
        x$('#site-cache').toggleClass('site-cache');

	});
	
});