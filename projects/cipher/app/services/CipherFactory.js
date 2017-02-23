'use strict'

angular.module('cryptographyApp').factory('Cipher', ['Alphabet', Cipher]);

function Cipher(Alphabet) {
  return {
    encrypt: (Method, input, key) => {
      return Method.encrypt(input, key);
    },
    decrypt: (Method, input, key) => {
      return Method.decrypt(input, key);
    },
    symbolCheck: (input) => {
      for (let i = 0; i < input.length; i++) {
        if (Alphabet.ALPHABET.indexOf(input[i]) === -1) {
          alert('This symbol ' + input[i] + ' not exist');
          return false;
        }
        return true;
      }
    },
    keyCheck: (key) => {
      return key < Number.MAX_SAFE_INTEGER && key > Number.MIN_SAFE_INTEGER;
    },
    formCheck: (input, key, method) => {
      return input && key && method;
    }
  }
}
