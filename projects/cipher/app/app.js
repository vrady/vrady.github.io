(() => {
  'use strict';

  let app = angular.module('cryptographyApp', ['ngFileSaver']);

  app.constant('Alphabet', {
    ALPHABET : `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯҐЄІЇабвгдеёжзийклмнопрстуфхцчшщъыьэюяґєії0123456789 .,!?()\n`
  })
})()
