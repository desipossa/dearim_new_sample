$(function () {

    $('#content').fullpage();

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
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
    })

})