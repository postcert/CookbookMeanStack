angular.module('app').controller('cbCookbookUserCtrl', function($scope, cbCookbook, cbIdentity) {
    $scope.cookbooks = cbCookbook.query();
    $scope.userName = cbIdentity.currentUser.userName;

    $scope.sortOptions = [{value:"title", text:"Sort by Title"},
        {value:"published", text:"Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
});