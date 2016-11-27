angular.module('thehonorclub')
.controller('loginController', ['$scope', '$state', '$firebaseAuthInstance', function ($scope, $state, $firebaseAuthInstance) {
  var dbRefUserInfo = firebase.database().ref("user_info");
  var signInUser;

	var currentUser = $firebaseAuthInstance.$getAuth();
	console.log(currentUser);
	if (currentUser != undefined) {
    $state.go('tabs.dashboard');
	}

	$scope.requestEvent = function() {
		$state.go('evmtRequest');
	}
	
	$scope.login = function() {
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithRedirect(provider);
		$state.go('loading');
  };

}]);