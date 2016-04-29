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
        $scope.tab = 1;
        $scope.selectTab = function (secTab) {
            this.tab = secTab;
        };
        $scope.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
        $scope.review = {};
        $scope.addReview = function (product) {
            $scope.review.createdOn = Date.now();
            phone.reviews.push($scope.review);
            $scope.review = {};
        };
        $('select').material_select();
        $('ul.tabs').tabs();
    }]);

appleStoreControllers.controller('ReviewController', function () {
    this.review = {};
    this.addReview = function (product) {
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
    }
});
