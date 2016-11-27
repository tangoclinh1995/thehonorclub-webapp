angular.module("thehonorclub")
.factory("$firebaseAuthInstance", function(firebaseKey) {
	var factory = {};

	factory.auth = JSON.parse(localStorage.getItem("firebase:authUser:"+firebaseKey+":[DEFAULT]"));

	factory.$getAuth = function() {
		return factory.auth;
	};

	factory.$setAuth = function(auth) {
		if (factory.auth != undefined) {
			console.log(factory.auth);
		}
		else {
			localStorage.setItem("firebase:authUser:"+firebaseKey+":[DEFAULT]",JSON.stringify(auth));
			factory.auth = auth;
		}

	};

  factory.$cleanAuth = function() {
		localStorage.removeItem("firebase:authUser:"+firebaseKey+":[DEFAULT]");
		factory.auth = undefined;
  }

	return factory;
});
