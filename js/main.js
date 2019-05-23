$(document).ready(function () {

    $('.main-nav').on('click','li',function () {
        $('.main-nav li.active-nav').removeClass('active-nav');
        $(this).addClass('active-nav')
    });

});
