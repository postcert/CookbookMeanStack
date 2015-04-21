angular.module('app').controller('cbCookbookUserCtrl', function($scope, $location, cbCookbook, cbIdentity) {
    $scope.cookbooks = cbCookbook.cookbooksuser.query(cbIdentity.currentUser.userName);

    $scope.sortOptions = [{value:"title", text:"Sort by Title"},
        {value:"published", text:"Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.newCookbook = function() {
        $location.path('/cookbooks/new');
    };
});