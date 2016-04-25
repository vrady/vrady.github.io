/**
 * Created by dimav on 24.04.2016.
 */

var appleStore = angular.module('appleStore', []);

appleStore.controller('PhoneListCtrl',function ($scope) {
    $scope.phones = [{
        name: 'iPhone 6S Plus',
        price: 749,
        description: '3D Touch. 12MP photos. 4K video.One powerful phone. Large screen.',
        canPurchase: true,
        screen: 5.5,
        reviews: [],
        image: 'img/iphone_6s_plus.jpg'
    },
        {
            name: 'iPhone 6S',
            price: 649,
            description: '3D Touch. 12MP photos. 4K video.One powerful phone.',
            canPurchase: true,
            screen: 4.7,
            reviews: [],
            image: 'img/iphone_6s_plus.jpg'
        },
        {
            name: 'iPhone 6 Plus',
            price: 649,
            description: '8MP photos. FullHD video. Apple A8 processor. Large screen.',
            canPurchase: true,
            screen: 5.5,
            reviews: [],
            image: 'img/iphone_6_plus.jpg'
        },
        {
            name: 'iPhone 6',
            price: 549,
            description: '8MP photos. FullHD video. Apple A8 processor.',
            canPurchase: true,
            screen: 4.7,
            reviews: [],
            image: 'img/iphone_6.jpg'
        },
        {
            name: 'iPhone SE',
            price: 399,
            description: 'A big step for small.',
            canPurchase: true,
            screen: 4,
            reviews: [],
            image: 'img/iphone_se.jpg'
        }
    ];
});