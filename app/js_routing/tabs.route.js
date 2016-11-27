angular.module('thehonorclub')

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tabs', {
    url: '/tabs',
    templateUrl: 'templates/tabs.html',
    abstract:true
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

  .state('tabs.cards', {
    url: '/cards',
    views: {
      'tabContent': {
        templateUrl: 'templates/cardpage.html',
        controller: 'CardsController'
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