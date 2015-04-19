angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotify, mvAuth, $location) {
    $scope.identity = mvIdentity;
    $scope.signin = function(username, password) {
        mvAuth.authenticateUser(username, password).then(function(success) {
            if(success) {
                mvNotify.notify('You have successfully logged in!');
            } else {
                mvNotify.notify('Username/Password combination is invalid');
            }
        });
    }

    $scope.signout = function() {
        mvAuth.logoutUser().then(function() {
            $scope.username = "";
            $scope.password = "";
            mvNotify.notify('You have successfully logged out!');
            $location.path('/');
        })
    };
});