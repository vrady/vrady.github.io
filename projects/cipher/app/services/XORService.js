 /**
 * Created by dimav on 10.03.2017.
 */
'use strict';

angular.module('cryptographyApp').service('XOR', [XOR]);

function XOR() {
    this.name = 'XOR';

    this.decode = function () {
        return method(arguments);
    };

    this.checking = function(period, input) {
        return period > input.length;
    }

    function method(args) {
        let output = '';
        let input = args[0];
        let period = args[1];
        let initial = args[2];
        let paramA = args[3];
        let paramB = args[4];
        let key = (((paramA * initial + paramB) % period) + period) % period;

        for (let i = 0; i < input.length; i++) {
            let index = input.charCodeAt(i);
            output += String.fromCharCode(index ^ key);
            key = (((paramA * key + paramB) % period) + period) % period;
        }

        return output;
    }

    return this;
}