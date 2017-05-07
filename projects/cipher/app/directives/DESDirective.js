angular.module('cryptographyApp').directive('des', des);

function des() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/DES.html',
        controller: DESController,
        controllerAs: 'des'
    }
}

function DESController(DES, FileSaver, Blob) {
    let that = this;

    that.methods = [
        {name: 'ECB', value: 1},
        {name: 'CBC', value: 2},
        {name: 'CFB', value: 3},
        {name: 'OFB', value: 4},
        {name: 'CTR', value: 5}
    ];

    that.encrypt = () => {
      that.input = DES.encrypt(that.method, that.input, that.key, that.iv);
    };

    that.decrypt = () => {
      that.input = DES.decrypt(that.method, that.input, that.key, that.iv);
    };

    that.openFile = ($fileContent) => {
        that.input = $fileContent.toString();
    };

    that.clear = () => {
        that.input = null;
        that.key = null;
        that.iv = null;
        that.method = null;
    };

    that.download = () => {
        let data = new Blob([that.input], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(data, 'text.txt');
    }
}
