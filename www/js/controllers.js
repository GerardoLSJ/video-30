angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaCapture) {

  $scope.captureVideo = function() {
    console.log('capture video')
    var options = {duration: 5 };

    $cordovaCapture.captureVideo(options).then(function(videoData) {
      // Success! Video data is here
      //mediaFiles[i].fullPath;
      console.log(JSON.stringify(videoData[0].fullPath));
      console.log(JSON.stringify(videoData[0].type));
      console.log(JSON.stringify(videoData[0].size));
      
    }, function(err) {
      console.log(err)
    });
  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
