angular.module('app').controller('cbCookbookListCtrl', function($scope, $location, cbCookbook, cbIdentity) {
    $scope.identity = cbIdentity;
    $scope.cookbooks = cbCookbook.cookbooks.query();

    $scope.sortOptions = [{value:"title", text:"Sort by Title"},
        {value:"published", text:"Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.newCookbook = function() {
        $location.path('/newcookbook');
    };
});