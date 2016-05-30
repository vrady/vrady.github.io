/**
 * Created by dimav on 29.05.2016.
 */
var display = $('#display');

$(document).ready(function () {

    $('#clear').click(function () {
        $('#display').html('');
    });

    $('.calculator__number, .calculator__operation').click(function () {
        if (this.dataset.value == '=')
            evalCalc();
        else if (this.dataset.value == 'clear')
            display.html('');
        else if (this.dataset.value == 'del')
            deleteone();
        else if (this.dataset.value == 'x2')
            squareCalc();
        else if (this.dataset.value == '2x')
            squareRootCalc();
        else addNumber(this.dataset.value);
    });

    $(this).keydown(function (e) {
        if (e.keyCode == 27) display.html('');
        if (e.keyCode == 8) deleteone();
        if (e.keyCode == 13) evalCalc();
        if (e.keyCode == 111) addNumber('/');
        if (e.keyCode == 106) addNumber('*');
        if (e.keyCode == 109) addNumber('-');
        if (e.keyCode == 107) addNumber('+');
        if (e.keyCode == 97) addNumber(1);
        if (e.keyCode == 98) addNumber(2);
        if (e.keyCode == 99) addNumber(3);
        if (e.keyCode == 100) addNumber(4);
        if (e.keyCode == 101) addNumber(5);
        if (e.keyCode == 102) addNumber(6);
        if (e.keyCode == 103) addNumber(7);
        if (e.keyCode == 104) addNumber(8);
        if (e.keyCode == 105) addNumber(9);
    });
});

function deleteone() {
    var result = display.html().split('');
    result.pop();
    display.html(result.join(''));
}

function addNumber(number) {
    var result = display.html().split('');
    result.push(number);
    display.html(result.join(''));
}

function evalCalc() {
    var result = eval(display.html());
    display.html(result);
}

function squareCalc() {
    display.html(Math.pow(display.html(), 2));
}

function squareRootCalc() {
    display.html(Math.pow(display.html(), 1 / 2));
}