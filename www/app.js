angular.module(
  "thehonorclub",
  ["ionic", "firebase", "ionic.contrib.ui.tinderCards"]
)

.run(function($ionicPlatform, $rootScope, $state) {
  $ionicPlatform.ready(function() {
    // // Monitor state chage to allow back button or not
    // $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
    //   console.log(from);
    //   if (from.name === 'loading' || from.name === 'login') {
    //     $ionicNavBarDelegate.showBackButton(false);
    //   }
    //   else {
    //     $ionicNavBarDelegate.showBackButton(true);
    //   }

    // });

  });
    
})

.config(function($stateProvider, $urlRouterProvider) {
  // Default state
  $urlRouterProvider.otherwise('/login');

});
