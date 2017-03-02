'use strict'

angular.module('cryptographyApp').service('Trithemius', ['Alphabet', Trithemius]);

function Trithemius(Alphabet) {
    this.name = 'Trithemius';

    this.encrypt = function () {
        return method(false, arguments);
    };

    this.decrypt = function () {
        return method(true, arguments);
    };

    function method(state, args) {
        let power = Alphabet.ALPHABET.length;
        let input = args[0];
        let output = '';
        let key = 0;
        for (let i = 0; i < input.length; i++) {
            if (args.length === 3) {
                key = linearKey(i, args[1], args[2]);
            }
            if (args.length === 4) {
                key = quadraticKey(i, args[1], args[2], args[3]);
            }
            if (args.length === 2) {
                key = symbolKey(args[1]);
            }
            if (state) {
                key *= -1;
            }
            output += Alphabet.ALPHABET.charAt((((Alphabet
                    .ALPHABET.indexOf(input.charAt(i)) + key) % power)
                + power) % power);
        }
        return output;
    }

    function linearKey(number, A, B) {
        return A * number + B;
    }

    function quadraticKey(number, A, B, C) {
        return A * Math.pow(number, 2) + B * number + C;
    }

    function symbolKey(symbol) {

    }

    return this;
}
