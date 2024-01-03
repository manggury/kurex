$(function () {
    $('.visual_silde').slick({
        arrows: false,
        dots: true,

    });

    $('.header .material-symbols-outlined').on('click', function (e) {
        e.preventDefault();
        $('.header .gnb').toggleClass('on');
    })
});