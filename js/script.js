$(function () {
    // ------------------ Menu Fix Start ---------------------
    var navoff = $('#menu').offset().top;

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('#menu').addClass('menu_fix');
        } else {
            $('#menu').removeClass('menu_fix');
        }
    });
    // ------------------ Menu Fix End ---------------------

    // ------------ Bottom to Top Button Start -------------
    $('.btn').click(function () {

        $('html,body').animate({
            scrollTop: 0,
        }, 2500);
    });

    $(window).scroll(function () {

        var udhao = $(this).scrollTop();

        if (udhao > 150) {
            $('.btn').fadeIn();
        } else {
            $('.btn').fadeOut();
        }
    });

    // ------------- Bottom to Top Button End --------------
    // ------------ Bottom to Top Button Start -------------
    $('.btn').click(function () {

        $('html,body').animate({
            scrollTop: 0,
        }, 2500);
    });

    $(window).scroll(function () {

        var udhao = $(this).scrollTop();

        if (udhao > 150) {
            $('.btn').fadeIn();
        } else {
            $('.btn').fadeOut();
        }
    });

    // ------------- Bottom to Top Button End --------------

    // ------------ Banner Slider Start -------------
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 2000,
        arrows: false,
        dots: true,
    });

    // ------------- Banner Slider End --------------

    // ------------ Story Video Player Start -------------

    $('.venobox_video').venobox({
        spinner: 'cube-grid',
        spinColor: '#311d5e'
    });

    // ------------- Story Video Player End --------------

    // ------------ Field Slider Start -------------

    $('.fie').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // ------------- Field Slider End --------------

    // ------------ Review Slider Start -------------
    $('.review_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 2000,
        arrows: false,
        dots: true,
    });

    // ------------- Review Slider End --------------











});