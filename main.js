$(document).ready(function(){
    $(function() {
        $(window).resize(function() {
            if ($(this).width() < 800) {
                $('.header').css('background-image', "url('got-images/banner-sm.jpg')");
            } else { 
                // default setting for desktop here...
                $('.header').css('background-image', "url('got-images/banner.jpg')");
            }
        });
    });
});