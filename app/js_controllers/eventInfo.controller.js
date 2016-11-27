angular.module("thehonorclub") 

.controller(
  'EventInfoCtrl', 
  ["$scope", "$firebaseAuthInstance", "$firebaseObject", "$stateParams", "$state",
  function($scope, $firebaseAuthInstance, $firebaseObject, $stateParams, $state) {
    

  var getStartDate= function() {
    return moment.unix(firebaseEvent.timestamp_begin).format("DD/MM/YYYY");
  };

  var getStartTime = function() {
    return moment.unix(firebaseEvent.timestamp_begin).format("hh:mm a");
  }

  function getEndDate() {
    return moment.unix(firebaseEvent.timestamp_end).format("DD/MM/YYYY");
  }

  function getEndTime() {
    return moment.unix(firebaseEvent.timestamp_end).format("hh:mm a");
  }
  //Get Firebase event
  function getFirebaseEvent() {
    var databaseRef = firebase.database().ref();
    var currentUser = $firebaseAuthInstance.$getAuth();
    return $firebaseObject(databaseRef.child("event/" + $stateParams.eventUid));
  }
  var firebaseEvent = getFirebaseEvent();
  console.log(firebaseEvent);
  
  // Convert FireBase Event to event (Functions and variables)
  firebaseEvent.$loaded().then(function() {
    $scope.event = {};
    $scope.event.name = firebaseEvent.name;
    $scope.event.description = firebaseEvent.description;
    $scope.event.location = firebaseEvent.location;
    $scope.event.contact_email = firebaseEvent.email;
    $scope.event.min_team_size = firebaseEvent.min_member_per_team;
    $scope.event.max_team_size = firebaseEvent.max_member_per_team;
    $scope.event.start_date = getStartDate();
    $scope.event.start_time = getStartTime();
    $scope.event.end_date = getEndDate();
    $scope.event.end_time = getEndTime();
  });

  console.log($scope.event);


  // Social Sharing
  var message = "Hey, checkout this event" + event.name + "."; 

  $scope.shareTwitter = function() {
    /*$cordovaSocialSharing.canShareVia("twitter", message).then(function(result) {
      $cordovaSocialSharing.shareViaTwitter(message);
    }, function(error) { alert("Cannot share on Twitter");});*/
  };

  $scope.shareInstagram = function() {
    // $cordovaSocialSharing.canShareVia("instagram", message).then(function(result) {
    //   $cordovaSocialSharing.shareViaInstagram(message);
    // }, function(error) { alert("Cannot share on Instagram");});
  };

  $scope.shareWhatsApp = function() {
    // $cordovaSocialSharing.canShareVia("whatsapp", message).then(function(result) {
    //   $cordovaSocialSharing.shareViaWhatsApp(message);
    // }, function(error) { alert("Cannot share on WhatsApp");});
  };
  
  $scope.shareFacebook = function() {
    // $cordovaSocialSharing.canShareVia("facebook", message).then(function(result) {
    //   $cordovaSocialSharing.shareViaFacebook(message);
    // }, function(error) { alert("Cannot share on Facebook");});
  };

}]);