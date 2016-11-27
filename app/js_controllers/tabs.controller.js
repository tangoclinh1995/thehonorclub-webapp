angular.module('thehonorclub')
.controller(
  "tabsController",
  ["$scope", "$state", "$firebaseAuthInstance",
  function($scope, $state, $firebaseAuthInstance) {
    var currentUser = $firebaseAuthInstance.$getAuth();

    $scope.logout = function() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        $firebaseAuthInstance.$cleanAuth();

        $state.go("login");

      }, function(error) {
        // An error happened.
        console.error(error);
      });

    };

  }

])