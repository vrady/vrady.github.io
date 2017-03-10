/**
 * Created by dimav on 10.03.2017.
 */
angular.module('cryptographyApp').directive('xor', xor);

function xor() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/XOR.html',
        controller: XORController,
        controllerAs: 'XOR'
    }
}

function XORController(Cipher, XOR, FileSaver, Blob) {
    let that = this;

    that.encrypt = () => {
        if (checking()) {
            that.input = XOR.encrypt(that.input, that.period, that.initial, that.paramA, that.paramB);
        }
    };

    that.decrypt = () => {
        if (checking()) {
            that.input = XOR.decrypt(that.input, that.period, that.initial, that.paramA, that.paramB);
        }
    };

    function checking() {
        if (!Cipher.symbolCheck(that.input)) {
            return false;
        }
        if (that.period < that.input.length) {
            alert('Period must be longer that input length');
            return false;
        } else return true;
    }

    that.openFile = ($fileContent) => {
        that.input = $fileContent.toString();
    };

    that.clear = () => {
        that.input = null;
        that.period = null;
        that.initial = null;
        that.paramA = null;
        that.paramB = null;
    };

    that.download = () => {
        let data = new Blob([that.input], {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(data, 'text.txt');
    }
}
