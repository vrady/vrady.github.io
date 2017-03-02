angular.module('cryptographyApp').directive('caesar', caesar);

function caesar() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/caesar.html',
        controller: CaesarController,
        controllerAs: 'caesar'
    }
}

function CaesarController(Cipher, Caesar, FileSaver, Blob) {
    let that = this;

    that.encrypt = () => {
        if (checking()) {
            that.input = Caesar.encrypt(that.input, that.key);
        }
    };

    that.decrypt = () => {
        if (checking()) {
            that.input = Caesar.decrypt(that.input, that.key);
        }
    };

    function checking() {
        if (Cipher.keyCheck(that.key)) {
            if (Cipher.symbolCheck(that.input)) {
                return true;
            }
        } else {
            alert('Wrong key');
        }
    }

    that.openFile = ($fileContent) => {
        that.input = $fileContent.toString();
    };

    that.clear = () => {
        that.input = null;
        that.key = null;
    };

    that.download = () => {
        let data = new Blob([that.input], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(data, 'text.txt');
    }
}
