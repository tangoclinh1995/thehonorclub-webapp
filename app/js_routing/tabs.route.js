angular.module('thehonorclub')

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tabs', {
    url: '/tabs',
    templateUrl: 'templates/tabs.html',
    controller: "tabsController",
    abstract: true
  })

  .state('tabs.userprofile', {
    url: '/userprofile',
    views: {
      'tabContent': {
        templateUrl: 'templates/profilepage.html',
        controller: 'userProfileController'
      }
    }
  })  

  .state('tabs.dashboard', {
    url: '/dashboard',
    views: {
      'tabContent': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardController'
      }
    }
  })

  .state('tabs.matchings', {
    url: '/matchings',
    views: {
      'tabContent': {
        templateUrl: 'templates/matchings.html',
        controller: 'matchingsController'
      }
    }
  })

});