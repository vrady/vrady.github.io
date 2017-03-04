angular.module('cryptographyApp').directive('trithemius', trithemius);

function trithemius() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/trithemius.html',
        controller: TrithemiusController,
        controllerAs: 'trithemius'
    }
}

function TrithemiusController(Cipher, Trithemius, FileSaver, Blob) {
    let that = this;

    that.methods = [
        {name: 'Linear', value: 1},
        {name: 'Quadratic', value: 2},
        {name: 'Slogan', value: 3}
    ];

    that.encrypt = () => {
        if (checking()) {
            if (that.method === 1) {
                that.input = Trithemius.encrypt(that.input, that.paramA, that.paramB);
            }
            if (that.method === 2) {
                that.input = Trithemius.encrypt(that.input, that.paramA, that.paramB, that.paramC);
            }
            if (that.method === 3) {
                that.input = Trithemius.encrypt(that.input, that.slogan);
            }
        }
    };

    that.decrypt = () => {
        if (checking()) {
            if (that.method === 1) {
                that.input = Trithemius.decrypt(that.input, that.paramA, that.paramB);
            }
            if (that.method === 2) {
                that.input = Trithemius.decrypt(that.input, that.paramA, that.paramB, that.paramC);
            }
            if (that.method === 3) {
                that.input = Trithemius.decrypt(that.input, that.slogan);
            }
        }
    };

    function checking() {
        if (!that.method) {
            alert('Choose method');
            return false;
        }
        if (!Cipher.symbolCheck(that.input)) {
            return false;
        }
        if (that.method === 1) {
            if (!that.paramA || !that.paramB) {
                alert('Fill paramA and paramB');
                return false;
            } else return true;
        }
        if (that.method === 2) {
            if (!that.paramA || !that.paramB || !that.paramC) {
                alert('Fill paramA, paramB and paramC');
                return false;
            } else return true;
        }
        if (that.method === 3) {
            return Cipher.symbolCheck(that.slogan);
        }
    }

    that.openFile = ($fileContent) => {
        that.input = $fileContent.toString();
    };

    that.clear = () => {
        that.input = null;
        that.method = null;
        that.paramA = null;
        that.paramB = null;
        that.paramC = null;
        that.slogan = null;
    };

    that.download = () => {
        let data = new Blob([that.input], {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(data, 'text.txt');
    }
}
