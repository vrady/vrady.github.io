/**
 * Created by dimav on 29.05.2016.
 */
var display = $('#display');

$(document).ready(function () {

    $('#clear').click(function () {
        clearDisplay();
    });

    $('.calculator__number, .calculator__operation, .calculator__extended-item').click(function () {
        if (this.dataset.value == '=')
            evalCalc();
        else if (this.dataset.value == 'clear')
            display.html('');
        else if (this.dataset.value == 'del')
            deleteone();
        else if (this.dataset.value == 'x2')
            squareCalc(2);
        else if (this.dataset.value == '2x')
            squareCalc(1 / 2);
        else if (this.dataset.value == 'pi')
            addNumber(Math.PI);
        else if (this.dataset.value == 'sin')
            sinCalc();
        else if (this.dataset.value == 'cos')
            cosCalc();
        else if (this.dataset.value == 'tan')
            tanCalc();
        else if (this.dataset.value == 'ln')
            lnCalc();
        else if (this.dataset.value == 'lg')
            lgCalc();
        else if (this.dataset.value == 'x3')
            squareCalc(3);
        else if (this.dataset.value == '3x')
            squareCalc(1 / 3);
        else if (this.dataset.value == 'ex')
            eCalc();
        else if (this.dataset.value == 'fact')
            factCalc();
        else addNumber(this.dataset.value);
    });

    $(this).keydown(function (e) {
        if (e.keyCode == 27) clearDisplay();
        if (e.keyCode == 8) deleteone();
        if (e.keyCode == 13) evalCalc();
        if (e.keyCode == 111) addNumber('/');
        if (e.keyCode == 106) addNumber('*');
        if (e.keyCode == 109) addNumber('-');
        if (e.keyCode == 107) addNumber('+');
        if (e.keyCode == 96) addNumber(0);
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

function clearDisplay() {
    display.html('');
}

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

function squareCalc(num) {
    display.html(Math.pow(display.html(), num));
}

function sinCalc() {
    display.html(Math.sin(display.html()));
}
function cosCalc() {
    display.html(Math.cos(display.html()));
}
function tanCalc() {
    display.html(Math.tan(display.html()));
}

function lnCalc() {
    display.html(Math.log(display.html()));
}
function lgCalc() {
    display.html(fnLog(display.html()));
}
function fnLog(m) {
    var fTmp = ((Math.log(m)) / (Math.log(10)));
    return (fTmp);
}

function eCalc() {
    display.html(Math.exp(display.html()));
}

function factCalc() {
    display.html(factorial(parseInt(display.html())));
}

function factorial(n) {
    if (n >= 0)
        return (n != 1) ? n * factorial(n - 1) : 1;
}