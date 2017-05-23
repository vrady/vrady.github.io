angular.module('cryptographyApp').directive('rsa', rsa);

function rsa() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/rsa.html',
        controller: RSAController,
        controllerAs: 'rsa'
    }
}

function RSAController(RSA, FileSaver, Blob) {
    let that = this;
    that.privateKey = "";
    that.publicKey = "";

    that.lengths = [
        {name: '512 bit', value: 512},
        {name: '1024 bit', value: 1024},
        {name: '2048 bit', value: 2048},
        //{name: '4096 bit', value: 4096}
    ];

    that.generateKeys = () => {
        that.privateKeyBob = cryptico.generateRSAKey(that.passphraseBob, that.length);
        that.publicKeyBob = cryptico.publicKeyString(that.privateKeyBob);
        that.privateKeyAlice = cryptico.generateRSAKey(that.passphraseAlice, that.length);
        that.publicKeyAlice = cryptico.publicKeyString(that.privateKeyAlice);
    }

    that.encryptBob = () => {
        that.inputBob = cryptico.encrypt(that.inputBob, that.publicKeyAlice).cipher;
    };

    that.decryptBob = () => {
        that.inputBob = cryptico.decrypt(that.inputBob, that.privateKeyBob).plaintext;
    };

    that.encryptAlice = () => {
        that.inputAlice = cryptico.encrypt(that.inputAlice, that.publicKeyBob).cipher;
    };

    that.decryptAlice = () => {
        that.inputAlice = cryptico.decrypt(that.inputAlice, that.privateKeyAlice).plaintext;
    };

    that.openFile = ($fileContent) => {
        that.inputBob = $fileContent.toString();
    };

    that.clear = () => {
        that.inputBob = null;
        that.inputAlice = null;
        that.length = null;
        that.passphraseBob = null;
        that.passphraseAlice = null;
        that.publicKeyBob = null;
        that.publicKeyAlice = null;
    };

    that.download = () => {
        let data = new Blob([that.inputBob], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(data, 'text.txt');
    }
}
