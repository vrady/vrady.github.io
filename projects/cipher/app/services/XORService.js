 /**
 * Created by dimav on 10.03.2017.
 */
'use strict';

angular.module('cryptographyApp').service('XOR', ['Alphabet', XOR]);

function XOR(Alphabet) {
    this.name = 'XOR';

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
        let period = args[1];
        let initial = args[2];
        let paramA = args[3];
        let paramB = args[4];
        let newIndex;
        let key = (paramA * initial + paramB) % period;

        for (let i = 0; i < input.length; i++) {
            let index = Alphabet.ALPHABET.indexOf(input.charAt(i));
            if (state) {
                newIndex = (index - key) % power;
            } else newIndex = (index + key) % power;
            newIndex != 0 ?
                output += Alphabet.ALPHABET.charAt(newIndex) :
                output += Alphabet.ALPHABET.charAt(power);
            key = (paramA * key + paramB) % period;
        }

        return output;
    }

    return this;
}
