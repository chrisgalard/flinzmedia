(function ($) {

	// Menu toggle functionality
	$('.js-navigation-toggle').click(function (event) {
		event.preventDefault();

		// Aria expanded role
		$(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'false');

		$('.js-navigation-menu').fadeToggle(100);
	});
	
})(jQuery);