'use strict'

angular.module('cryptographyApp').controller('CryptographyController', ['$scope', 'Cipher', 'Caesar', 'Trithemius', 'FileSaver', 'Blob', CryptographyController])

function CryptographyController($scope, Cipher, Caesar, Trithemius, FileSaver, Blob) {
  let that = this;

  this.methods = [
    {value: Caesar, name: 'Caesar'},
    {value: Trithemius, name: 'Trithemius'}
  ];

  this.encrypt = () => {
    if (checking()) {
      this.input = Cipher.encrypt(that.method, that.input, that.key);
    }
  }

  this.decrypt = () => {
    if (checking()) {
      this.input = Cipher.decrypt(that.method, that.input, that.key);
    }
  }

  function checking() {
    if (Cipher.formCheck(that.input, that.key, that.method)) {
      if (Cipher.keyCheck(that.key)) {
        if (Cipher.symbolCheck(that.input)) {
          return true;
        }
      } else {
        alert('Wrong key');
      }
    } else {
      alert('Empty input or key or method');
    }
  }

  this.openFile = ($fileContent) => {
    this.input = $fileContent.toString();
  }

  this.clear = () => {
    this.input = null;
    this.key = null;
  }

  this.donwload = () => {
    let data = new Blob([that.input], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(data, 'text.txt');
  }
}
