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
        if(this.scrollY >= $homeSection.height() * 0.9){
            if($header.hasClass('alt')){
                $header.removeClass('alt');
            }
        } else if(!$header.hasClass('alt')){
            $header.addClass('alt');
        }
    });
})(jQuery);

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}

function toggleMenu(menu) {
    const links = document.querySelector('#header');
    links.classList.toggle('active');
}