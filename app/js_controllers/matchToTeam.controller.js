angular.module('thehonorclub')
.controller(
  'matchToTeamController',
  ["$scope", "$stateParams", "TDCardDelegate", "$firebaseAuthInstance", "$matchingRequestService", "$recommendationService", "$firebaseObject",
  function($scope, $stateParams, TDCardDelegate, $firebaseAuthInstance, $matchingRequestService, $recommendationService, $firebaseObject)
{
  var databaseRef = firebase.database().ref();

  var allUserInfo = $firebaseObject(databaseRef.child("user_info"));
  var teamInfo = $firebaseObject(databaseRef.child("team"));
  
  var currentUser = $firebaseAuthInstance.$getAuth();
  if (typeof currentUser == "undefined") {
      $state.go("login");
  }

  $scope.currentEventUid = $stateParams.eventUid;
  if ($scope.currentEventUid == "") {
    $scope.currentEventUid = undefined;    
  }
  
  $scope.eventInfo = $firebaseObject(databaseRef.child("event"));

  $scope.cards = [];

  $scope.getMoreCards = function() {
    $recommendationService.recommendTeam(currentUser.uid, $scope.currentEventUid)
    .then(function(teams) {
      var teamMatchObj;

      for (var i = 0, len = teams.length; i < len; ++i) {
        teamMatchObj = teams[i];

        $scope.cards.unshift({
          teamUid: teamMatchObj.team_uid,
          eventUid: teamMatchObj.event_uid,
          
          matchingScore: teamMatchObj.matching_score,
          mostMatchedSkills: teamMatchObj.most_matched_skills,
          mostMatchedPositions: teamMatchObj.most_matched_positions,

          image: allUserInfo[teamInfo[teamMatchObj.team_uid].leader_uid].photoURL,
          teamName: teamInfo[teamMatchObj.team_uid].name
        });
      }

    });

  };  

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    
    if ($scope.cards.length <= 1) {
      $scope.getMoreCards();
    }

  };

  $scope.cardSwipedLeft = function(index) {
    console.log("left" + index);
  };

  $scope.cardSwipedRight = function(index) {
    console.log("right" + index);

    // Send request
    var matchObj = $scope.cards[index];

    $matchingRequestService
    .joinTeam(currentUser.uid, matchObj.teamUid, matchObj.eventUid)
    .then(function() {
      console.log("Sent to ", matchObj.teamUid);
    });

  };

  setTimeout(function() {
    $scope.getMoreCards();
  }, 1000);

}

]);
