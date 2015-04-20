angular.module('app').controller('mvSignupCtrl', function($scope, $location, mvUser, mvNotify, mvAuth) {

    $scope.signup = function() {
        var newUserData = {
            userName: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        mvAuth.createUser(newUserData).then(function() {
            mvNotify.notify('User account created!');
            $location.path('/');
        }, function(reason) {
            mvNotify.error(reason);
        })
    }
})