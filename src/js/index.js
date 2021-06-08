$(document).ready(function() {
    console.log('ready');
    $('select').niceSelect();
});
$(document).on('scroll', function(){
    console.log($(document).scrollTop());
    if($(document).scrollTop() > 30){
        $('.header').addClass('scrolled');
    } else {
        $('.header').removeClass('scrolled');
    }
});
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
    prevArrow:'.testimonials-arrows .prev-arrow',
    nextArrow:'.testimonials-arrows .next-arrow',
    dots: false
});
// tabsChange();
$('.tab-button').on('click', function(){
    tabsChange($(this));
});
$('.faq-item_question').on('click', function(){
    console.log($(this).closest('.faq-item'));
    if($(this).closest('.faq-item').hasClass('active')){
        $(this).closest('.faq-item').removeClass('active');
    } else {
        $('.faq-item.active').removeClass('active');
        $(this).closest('.faq-item').addClass('active');
    }
})
function tabsChange ($tabButton){
    $('.tab-button').removeClass('active');
    $tabButton.addClass('active');
    var tabNum = $tabButton.data('tab');
    var curTab = $tabButton.closest('.tabs').find('.tab-content[data-content="'+tabNum+'"]');
    $('.tab-content').not(curTab).hide();
    curTab.show();
    // console.log(!!curTab.find('.prod-carousel')[0]);
    if(!!curTab.find('.prod-carousel')[0]){
        curTab.find('.prod-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        });
    }
}