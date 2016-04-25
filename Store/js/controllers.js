/**
 * Created by dimav on 24.04.2016.
 */

var appleStoreControllers = angular.module('appleStoreControllers', []);

appleStoreControllers.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('phones/phones.json').success(function (data) {
        $scope.phones = data;
    });
    $('.parallax').parallax();
}]);

appleStoreControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
            $scope.phone = data;
        });
        $('select').material_select();
    }]);

