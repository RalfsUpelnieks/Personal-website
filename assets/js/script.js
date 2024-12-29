(function($) {
	const $window = $(window);
    const $header = $('#header');
    const $homeSection = $('#home-section');

	// Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $homeSection.removeClass('hidden');
        }, 100);
    });

	// Header.
    $window.on("scroll", function() {
        const scrollThreshold = $homeSection.height() * 0.9;
        $header.toggleClass('alt', window.scrollY < scrollThreshold);
    });
})(jQuery);

function toggleMenu() {
    const links = document.querySelector('#header');
    links.classList.toggle('active');
}