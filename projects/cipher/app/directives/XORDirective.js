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

function XORController(XOR, FileSaver, Blob) {
    let that = this;

    that.decode = () => {
        if (XOR.checking(that.period, that.input)) {
            that.input = XOR.decode(that.input, that.period, that.initial, that.paramA, that.paramB);
        } else {
            alert('Period must be longer than input length = ' + that.input.length);
        }
    };

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
