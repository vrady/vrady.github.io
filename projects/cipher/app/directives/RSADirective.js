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

    that.encrypt = () => {
        that.privateKey = cryptico.generateRSAKey(that.passphrase, that.length);
        that.publicKey = cryptico.publicKeyString(that.privateKey);
        that.input = cryptico.encrypt(that.input, that.publicKey).cipher;
    };

    that.decrypt = () => {
        that.input = cryptico.decrypt(that.input, that.privateKey).plaintext;
    };

    that.openFile = ($fileContent) => {
        that.input = $fileContent.toString();
    };

    that.clear = () => {
        that.input = null;
        that.length = null;
        that.passphrase = null;
        that.publicKey = null;
    };

    that.download = () => {
        let data = new Blob([that.input], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(data, 'text.txt');
    }
}
