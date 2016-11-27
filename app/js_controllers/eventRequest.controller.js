angular.module("thehonorclub") 

.controller('EventRequestCtrl', function($scope, $ionicLoading, $state) {

  var ref = firebase.database().ref().child("event");

  $scope.startDate = '';
  $scope.endDate = '';
  $scope.startTime = '';
  $scope.endTime = '';

  $scope.addEvent = function() {
    $scope.startDate = $scope.startDate.replace(" ", "").trim();
    $scope.endDate = $scope.endDate.replace(" ", "").trim();

    $scope.startTime = $scope.startTime.replace(" ", "").trim();
    $scope.endTime = $scope.endTime.replace(" ", "").trim();

    var startTimeStamp = moment.utc($scope.startDate, "YYYY-MM-DD").add(moment.duration($scope.startTime)).unix();
    var endTimeStamp = moment.utc($scope.endDate, "YYYY-MM-DD").add(moment.duration($scope.endTime)).unix();

    var newEventRef = firebase.database().ref().child("event").push();
    newEventRef.set({
      name: $scope.name,
      description: $scope.description,
      timestamp_begin: startTimeStamp,
      timestamp_end: endTimeStamp,
      min_member_per_team: $scope.minSize,
      max_member_per_team: $scope.maxSize,
      email: $scope.email,
      location: $scope.location
    })
    .then(function() {
      $ionicLoading.show({
        template: "New event proposed!",
        duration: 1000
      })
      .then(function() {
        // Go back to landing page. Can be changed later if needed
        $state.go("login");

      });

    })
    .catch(function() {
      $ionicLoading.show({
        template: "Error sending new event to server!",
        duration: 1000
      });

    });

  };
})
