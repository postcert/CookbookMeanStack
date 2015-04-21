angular.module('app').controller('cbProfileCtrl', function($scope, cbAuth, cbIdentity, cbNotify) {
    $scope.email = cbIdentity.currentUser.userName;
    $scope.fname = cbIdentity.currentUser.firstName;
    $scope.lname = cbIdentity.currentUser.lastName;

    $scope.update = function() {
        var newUserData = {
            userName: $scope.email,
            firstName: $scope.fname,
            lastName: $scope.lname
        };
        if ($scope.password && $scope.password.length > 0) {
            newUserData.password = $scope.password;
        }

        cbAuth.updateCurrentUser(newUserData).then(function() {
            cbNotify.notify('Your user account has been updated');
        }, function(reason) {
            cbNotify.error(reason);
        })
    }
});