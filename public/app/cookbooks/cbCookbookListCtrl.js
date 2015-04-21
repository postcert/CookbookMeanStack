angular.module('app').controller('cbCookbookListCtrl', function($scope, cbCookbook) {
    $scope.cookbooks = cbCookbook.cookbooks.query();

    $scope.sortOptions = [{value:"title", text:"Sort by Title"},
        {value:"published", text:"Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
});