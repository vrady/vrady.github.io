(() => {
  'use strict';

  let app = angular.module('cryptographyApp', ['ngFileSaver', 'ngMaterial'])
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .dark()
  .primaryPalette('teal')
});

  app.constant('Alphabet', {
    ALPHABET : `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯҐЄІЇабвгдеёжзийклмнопрстуфхцчшщъыьэюяґєії0123456789 .,!?()\n`
  })
})()
