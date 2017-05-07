'use strict';

angular.module('cryptographyApp').service('DES', [DES]);

function DES() {
   this.name = 'DES';

   this.encrypt = function (mode, message, key, iv) {
      if (mode === 1) {
        return encryptECB(message, key);
      } else {
        return encrypt(message, key, iv, mode);
      }
   };

   this.decrypt = function (mode, ciphertext, key, iv) {
     if (mode === 1) {
       return decryptECB(ciphertext, key);
     } else {
       return decrypt(ciphertext, key, iv, mode);
     }
   };

   function encryptECB(message, key) {
     let keyHex = CryptoJS.enc.Utf8.parse(key);
     let encrypted = CryptoJS.DES.encrypt(message, keyHex, {
       mode: CryptoJS.mode.ECB,
       padding: CryptoJS.pad.Pkcs7
     });

     return encrypted.toString();
   }

   function encrypt(message, key, iv, mode) {
     let keyHex = CryptoJS.enc.Utf8.parse(key);
     let ivHex = CryptoJS.enc.Hex.parse(CryptoJS.enc.Utf8.parse(iv).toString(CryptoJS.enc.Hex));
     let cipherMode;
     switch (mode) {
       case 2:
         cipherMode = CryptoJS.mode.CBC;
         break;
       case 3:
         cipherMode = CryptoJS.mode.CFB;
         break;
       case 4:
         cipherMode = CryptoJS.mode.OFB;
         break;
       case 5:
         cipherMode = CryptoJS.mode.CTR;
         break;
     }
     let encrypted = CryptoJS.DES.encrypt(message, keyHex, {
       iv: ivHex,
       mode: cipherMode
     });

     return encrypted.toString();
   }

   function decryptECB(ciphertext, key) {
     let keyHex = CryptoJS.enc.Utf8.parse(key);
     let decrypted = CryptoJS.DES.decrypt({
       ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
       }, keyHex, {
         mode: CryptoJS.mode.ECB,
         padding: CryptoJS.pad.Pkcs7
     });

     return decrypted.toString(CryptoJS.enc.Utf8);
   }

   function decrypt(ciphertext, key, iv, mode) {
     let keyHex = CryptoJS.enc.Utf8.parse(key);
     let ivHex = CryptoJS.enc.Hex.parse(CryptoJS.enc.Utf8.parse(iv).toString(CryptoJS.enc.Hex));
     let cipherMode;
     switch (mode) {
       case 2:
         cipherMode = CryptoJS.mode.CBC;
         break;
       case 3:
         cipherMode = CryptoJS.mode.CFB;
         break;
       case 4:
         cipherMode = CryptoJS.mode.OFB;
         break;
       case 5:
         cipherMode = CryptoJS.mode.CTR;
         break;
     }
     let decrypted = CryptoJS.DES.decrypt({
       ciphertext: CryptoJS.enc.Base64.parse(ciphertext)},
       keyHex, {
       iv: ivHex,
       mode: cipherMode
     });

     return decrypted.toString(CryptoJS.enc.Utf8);
   }

   return this;
}
