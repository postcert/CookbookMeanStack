angular.module('app').controller('cbSignupCtrl', function($scope, $location, cbUser, cbNotify, cbAuth) {

    $scope.signup = function() {
        var newUserData = {
            userName: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        cbAuth.createUser(newUserData).then(function() {
            cbNotify.notify('User Account created!');
            $location.path('/');
        }, function(reason) {
            cbNotify.error(reason);
        })
    }
});