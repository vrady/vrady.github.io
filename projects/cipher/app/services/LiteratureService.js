'use strict';

angular.module('cryptographyApp').service('Literature', [Literature]);

function Literature() {
    this.name = 'Literature';

    this.crypt = function (state, input, fragment) {
        if (state) {
            return encrypt(input, fragment);
        } else {
            return decrypt(input, fragment);
        }
    };

    this.checking = function(fragment, input) {
        for (let i = 0; i < input.length; i++) {
            if (fragment.indexOf(input[i]) === -1) {
                return false;
            }
        }

        return true;
    }

    this.checkingDecrypt = function(fragment, input){
        let keys = createKeys(fragment);

        for (let i = 0; i < input.length; i++) {
            if (!checkKey(keys, input[i])){
                return false;
            }
        }

        return true;
    }

    function checkKey(keys, index) {
        for (let key in keys) {
            if (key == +index) {
                return true;
            }
        }

        return false;
    }

    function encrypt(input, fragment) {
        let keys = createKeys(fragment);
        let output = '';

        for (let i = 0; i < input.length; i++) {
            output += getRandIndex(keys, input[i]) + " ";
        }

        return output.substring(0, output.length - 1);
    }

    function decrypt(input, fragment) {
        let keys = createKeys(fragment);
        let output = '';
        let indexes = input.split(" ");

        for (let i = 0; i < indexes.length; i++) {
            output += getSymbol(keys, indexes[i]);
        }

        return output;
    }

    function getSymbol(keys, index) {
        for (let key in keys) {
            if (key == +index) {
                return keys[key];
            }
        }
    }

    function getRandIndex(keys, symbol) {
        let array = [];

        for (let key in keys) {
            if (keys[key] == symbol) {
                array.push(key);
            }
        }

        return array[Math.floor(Math.random() * array.length)];
    }

    function createKeys(fragment) {
        let keys = {};
        let column = 0;
        let row = 0;
        let index;

        for (let i = 0; i < fragment.length; i++) {
            if (fragment[i] == '\n') {
                row++;
                column = 0;
            } else {
                index = createIndex(column, row);
                keys[index] = fragment[i];
                column++;
            }
        }

        return keys;
    }

    function createIndex(column, row) {
        if (column < 10 && row < 10) return "0" + row + "0" + column;
        if (column < 10 || row < 10) {
            if (column < 10) {
                return row + "0" + column;
            } else if (row < 10) {
                return "0" + row + column;
            }
        } else return row + "" + column;
    }

    return this;
}
