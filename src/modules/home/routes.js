(function () {
    "use strict";
    angular.module('QSoft.routers')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise("/404");
            $locationProvider.html5Mode(true);
            $stateProvider
                .state('app.home', {
                    url: '/',
                    meta: {
                        title: 'Homepage',
                        description: ''
                    },
                    views: {
                        'main@': {
                            templateUrl: 'scss/home/index.html',
                            controller: 'HomeController',
                            controllerAs: 'homeCtr'
                        }
                    }
                });
        }]);

})();