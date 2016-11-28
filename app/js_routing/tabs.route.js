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

  .state('tabs.listevent', {
    url: '/listevent',
    views: {
      'tabContent': {
        templateUrl: 'templates/eventlist.html',
        controller: 'eventListController'
      }
    }
  })

  .state('tabs.eventinfo', {
    url: '/eventInfo/:eventUid',
    views: {
      'tabContent': {
        templateUrl: 'templates/eventInfo.html',
        controller: 'EventInfoCtrl'
      }
    }
  })    

  .state('tabs.matchtoteam', {
    url: '/matchtoteam/:eventUid?',
    views: {
      'tabContent': {
        templateUrl: 'templates/matchToTeam.html',
        controller: 'matchToTeamController'
      }
    }
  })

  .state('tabs.matchtoteammember', {
    url: '/matchtoteammember/:teamUid',
    views: {
      'tabContent': {
        templateUrl: 'templates/matchToTeamMember.html',
        controller: 'matchToTeamMemberController'
      }
    }
  })  

});