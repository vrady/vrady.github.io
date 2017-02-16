/**
 * Created by dimav on 16.02.2017.
 */
$(document).ready(function () {

    $('.hamburger__toggle').click(function(){
        $(this).toggleClass('hamburger__toggle--open');
        $('.hamburger__list').toggleClass('hamburger__list--active');
    });


    function setFilters(parent){
        $(parent).on('click', '.filter__item', function(){
            if($(this).hasClass('filter__item--active')) {
                var filter = $(this).data('filter');
                $.each($('.posts__item'), function() {
                    if($(this).data('type') === filter){
                        $(this).hide(500)
                    }
                });
                $(this).toggleClass('filter__item--active');
            } else {
                var filter = $(this).data('filter');
                $.each($('.posts__item'), function() {
                        if($(this).data('type') === filter){
                            $(this).show(500)
                        }
                    });
                $(this).toggleClass('filter__item--active');
            }
        });
    };

    setFilters('.filter__items')

})