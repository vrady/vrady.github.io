$(document).ready(function () {

    $('.hamburger').click(function(){
        $(this).toggleClass('hamburger--open');
        $('.menu').toggleClass('menu--active');
    });

});