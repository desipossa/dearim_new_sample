$(function () {

    $('#content').fullpage({
        anchors: ['main', '02'],
        responsiveWidth: 1200,
        responsiveHeight: 700,
        afterLoad: function (name, idx) {
            $('#aside .lnb li')
                .eq(idx - 1)
                .addClass('on')
                .siblings()
                .removeClass('on')
        },
    });

    $('#header .utils .lang>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().toggle();
    });

    const mainVisualSlide = new Swiper('.main_visual_slide', {
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.main_visual_slide .dots',
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    })

})