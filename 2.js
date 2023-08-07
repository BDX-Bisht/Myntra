$(document).ready(function () {
    $('.flat').click(function () {
        $(this).css('display', 'none');
        $('.flat2').css('display', 'flex');
        $('.flat2').css('flexwrap', 'wrap');
        $('.avail').show();
    });
    $('.flat2').click(function () {
        $(this).css('display', 'none');
        $('.flat').css('display', '');
        $('.avail').hide();
    });
    $('#carousel-item').owlCarousel({
        items: 1,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
    });
    $('#deal2').owlCarousel({
        items: 8,
        loop: true,
        margin: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 8,
            }
        }
    });
    $('#exclusive1').owlCarousel({
        items: 8,
        rtl: true,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $('#exclusive2').owlCarousel({
        items: 8,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000
    });
    
    $('#picks1').owlCarousel({
        items: 8,
        rtl: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
    });
    
    $('#catagories').owlCarousel({
        items: 8,
        loop: true,
        margin: 1,
        autoplay: true,
        autoplayTimeout: 3000
    });
    
    $('#catagories1').owlCarousel({
        items: 8,
        rtl: true,
        loop: true,
        margin: 1,
        autoplay: true,
        autoplayTimeout: 3000
    });
    
    $('#catagories2').owlCarousel({
        items: 8,
        loop: true,
        margin: 1,
        autoplay: true,
        autoplayTimeout: 3000
    });

});