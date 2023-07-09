(function($) {

	var	$window = $(window), 
        $body = $('body'),
		$navName = $('#nav-name'),
        $homeSection = $("#home-section");

	// Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $homeSection.removeClass('hidden');
        }, 100);
    });

	// navName.
    $window.on("scroll", function(){
        if(this.scrollY >= $homeSection.height() * 0.9){
            if($navName.hasClass('alt')){
                $navName.removeClass('alt');
            }
        } else if(!$navName.hasClass('alt')){
            $navName.addClass('alt');
        }
    });
})(jQuery);

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}