$(document).ready(function() {

    $('select').niceSelect();

    $('.tab-content:first-child .prod-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    $('.testimonals-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        cssEase: 'ease',
        easing: 'linear',
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        prevArrow:'.testimonials-arrows .prev-arrow',
        nextArrow:'.testimonials-arrows .next-arrow',
        dots: false
    });

    // tabsChange();
    $('.tab-button').on('click', function(){
        tabsChange($(this));
    });
    $('.faq-item_question').on('click', function(){
        const box = $(this).closest('.faq-item');
        const answer = box.find('.faq-item_answer');
        $('.faq-item_answer').not(answer).slideUp();
        $('.faq-item').not(box).removeClass('active');
        if(box.hasClass('active')) {
            box.removeClass('active');
            answer.slideUp();
        } else {
            box.addClass('active');
            answer.slideDown();
        }
    });

    function tabsChange ($tabButton){
        $('.tab-button').removeClass('active');
        $tabButton.addClass('active');
        var tabNum = $tabButton.data('tab');
        var curTab = $tabButton.closest('.tabs').find('.tab-content[data-content="'+tabNum+'"]');
        $('.tab-content').not(curTab).hide();
        curTab.show();
        curTab.find('.anim-on-scroll').removeClass('hide');
        // console.log(!!curTab.find('.prod-carousel')[0]);
        if(!curTab.find('.slick-slider')[0]){
            curTab.find('.prod-carousel').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            });
        }
    }

    // nav on scroll //
    $('.header-nav a').on('click', function (e) {
        e.preventDefault();
        let target = $(this.hash);
        if (!!target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 50
            }, 500);
            return false;
        }
    });

});
$(document).on('scroll', function(){

    const vScroll = $(window).scrollTop();

    $('.anim-on-scroll').each(function () {
        if(isScrolledIntoView($(this))) {
            $(this).removeClass('hide');
        }
    });

    if($(document).scrollTop() > 30){
        $('.header').addClass('scrolled');
    } else {
        $('.header').removeClass('scrolled');
    }

    // switch active nav link //
    $('section').each(function (i) {
        if ($(this).position().top <= vScroll) {
            $('.header-nav a[href*="#"]:not([href="#"]).active').removeClass('active');
            $('.header-nav a').eq(i).addClass('active');
        }
    });

    // close mobile on scoll //
    closeNav();
});

$(window).on('load', function () {

    $('#wrapper').removeClass('loading');

    $('.anim-on-scroll').each(function () {
        if(isScrolledIntoView($(this))) {
            $(this).removeClass('hide');
        }
    });

});

// toggle nav mobile //
const burger = $('.burger');
const nav = $('.header-nav');

burger.on('click', function () {
    burger.hasClass('is-active') ? closeNav() : openNav();
});

function openNav() {
    burger.addClass('is-active');
    nav.fadeIn();
}

function closeNav() {
    burger.removeClass('is-active');
    nav.fadeOut();
}

Splitting({
    target: $('.slice'),
    by: 'lines'
});

function isScrolledIntoView(elem) {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}