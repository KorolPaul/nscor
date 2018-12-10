$(window).on('load', function () {

    /* Menu toggle */
    $('.menu-toggle').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('opened');
        $('.menu').toggleClass('opened');
    });

    /* Slider */
    $('#slider').slick({
        dots: false,
    });

    /* Popup */
    $('.project_more, .popup_close').click(function() {
        $('body').toggleClass('popup-opened');
    });
    
});
