/**
 * Created by dimav on 25.04.2016.
 */



var appleStore = angular.module('appleStore', [
    'ngRoute',
    'appleStoreControllers'
]);

appleStore.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/home.html',
            controller: 'PhoneListCtrl'
        }).when('/:phoneId', {
            templateUrl: 'partials/detail.html',
            controller: 'PhoneDetailCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    }]);