'use strict'

angular.module('cryptographyApp').service('Trithemius', ['Alphabet', Trithemius]);

function Trithemius(Alphabet) {
  this.encrypt = (input, param) => {
    return method(input, param, false);
  }

  this.decrypt = (input, param) => {
    return method(input, param, true);
  }

  function method(input, param, state) {
    let power = Alphabet.ALPHABET.length;
    let key = 8 * Math.pow(param,2) + 4 * param + 1;
    if (state) {
      key *= -1;
    }
    let output = '';
    for (let i = 0; i < input.length; i++) {
      output += Alphabet.ALPHABET.charAt((((Alphabet
        .ALPHABET.indexOf(input.charAt(i)) + key) % power)
       + power) % power);
    }
    return output;
  }

  return this;
}
