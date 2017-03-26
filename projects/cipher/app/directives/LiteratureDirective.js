angular.module('cryptographyApp').directive('literature', literature);

function literature() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/literature.html',
        controller: LiteratureController,
        controllerAs: 'literature'
    }
}

function LiteratureController(Literature, FileSaver, Blob) {
    let that = this;

    that.encrypt = () => {
        if (Literature.checking(that.fragment, that.input)) {
            that.input = Literature.crypt(true, that.input, that.fragment);
        } else {
            alert('fragment not contain symbol');
        }
    };

    that.decrypt = () => {
        if (Literature.checkingDecrypt(that.fragment, that.input)){
            that.input = Literature.crypt(false, that.input, that.fragment);
        } else {
            alert('unknown codes');
        }
    };

    that.openFile = ($fileContent) => {
        that.input = $fileContent.toString();
    };

    that.literatureFile = ($fileContent) => {
        that.fragment = $fileContent.toString();
    };

    that.clear = () => {
        that.input = null;
        that.fragment = null;
    };

    that.download = () => {
        let data = new Blob([that.input], {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(data, 'text.txt');
    }
}
