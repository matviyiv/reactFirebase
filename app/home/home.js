'use strict';
 
angular.module('myApp.home', ['ngRoute', 'firebase'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller
.controller('HomeCtrl', ['$scope', '$firebaseSimpleLogin', function($scope, $firebaseSimpleLogin) {
  var firebaseObj = new Firebase("https://intense-torch-5719.firebaseio.com"),
      loginObj = $firebaseSimpleLogin(firebaseObj);

  $scope.SignIn = function($scope2) {
    var username = $scope.user.email,
        password = $scope.user.password;
     
    loginObj.$login('password', {
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            console.log('Authentication Successful');
        }, function(error) {
            // Failure callback
            console.log('Authentication Failure');
        });
  };
}]);