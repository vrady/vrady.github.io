'use strict'

angular.module('cryptographyApp').service('Caesar', ['Alphabet', Caesar]);

function Caesar(Alphabet) {
  this.encrypt = (input, key) => {
    return method(input, key);
  }

  this.decrypt = (input, key) => {
    return method(input, -1 * key);
  }

  function method(input, key) {
    let power = Alphabet.ALPHABET.length;
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += Alphabet.ALPHABET.charAt((((Alphabet
          .ALPHABET.indexOf(input.charAt(i))
          + key) % power) + power) % power);
      }
    return output;
  }

  return this;
}
