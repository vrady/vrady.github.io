/**
 * Created by dimav on 04.06.2016.
 */
$(document).ready(function () {
    $('.slider__paginator').click(function () {
        $('.slider__paginator-active').removeClass('slider__paginator-active');
        $(this).toggleClass('slider__paginator-active');
        if (this.dataset.value == 1) {
            $('.slider__item-active').removeClass('slider__item-active');
            $('#first').toggleClass('slider__item-active');
        }
        if (this.dataset.value == 2) {
            $('.slider__item-active').removeClass('slider__item-active');
            $('#second').toggleClass('slider__item-active');
        }
        if (this.dataset.value == 3) {
            $('.slider__item-active').removeClass('slider__item-active');
            $('#third').toggleClass('slider__item-active');
        }
    });
    $('#write').click(function () {
        $('.writeus__container').css('display', 'block');
    });
    $('#cancel').click(function () {
        $('.writeus__container').css('display', 'none');
    })
});