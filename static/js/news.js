$(document).ready(function () {
    var indexSwiper1 = new Swiper('.newsSwiper1', {
        loop: true,
        paginationClickable: true,
        autoplayDisableOnInteraction: false
    });
    $('.newsSwiper1-next').on('click', function(e){
        e.preventDefault();
        indexSwiper1.swipeNext();
    })
    $('.newsSwiper1-prev').on('click', function(e){
        e.preventDefault();
        indexSwiper1.swipePrev();
    })

    var indexSwiper2 = new Swiper('.newsSwiper2', {
        loop: true,
        paginationClickable: true,
        autoplayDisableOnInteraction: false
    });
    $('.newsSwiper2-next').on('click', function(e){
        e.preventDefault();
        indexSwiper2.swipeNext();
    })
    $('.newsSwiper2-prev').on('click', function(e){
        e.preventDefault();
        indexSwiper2.swipePrev();
    })

    var indexSwiper3 = new Swiper('.newsSwiper3', {
        loop: true,
        paginationClickable: true,
        autoplayDisableOnInteraction: false
    });
    $('.newsSwiper3-next').on('click', function(e){
        e.preventDefault();
        indexSwiper3.swipeNext();
    })
    $('.newsSwiper3-prev').on('click', function(e){
        e.preventDefault();
        indexSwiper3.swipePrev();
    })
})