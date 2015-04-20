angular.module('app').controller('cbNavBarLoginCtrl', function($scope, $http, cbIdentity, cbNotify, cbAuth, $location) {
    $scope.identity = cbIdentity;
    $scope.signin = function(username, password) {
        cbAuth.authenticateUser(username, password).then(function(success) {
            if(success) {
                cbNotify.notify('You have successfully logged in!');
            } else {
                cbNotify.notify('Username/Password combination is invalid');
            }
        });
    }

    $scope.signout = function() {
        cbAuth.logoutUser().then(function() {
            $scope.username = "";
            $scope.password = "";
            cbNotify.notify('You have successfully logged out!');
            $location.path('/');
        })
    };
});