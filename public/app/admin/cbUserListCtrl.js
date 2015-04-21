angular.module('app').controller('cbUserListCtrl', function($scope, cbUser) {
    $scope.users = cbUser.query();

});