angular.module('app').controller('cbCookbookListCtrl', function($scope, $location, cbCookbook, cbIdentity, cbNotify) {
    $scope.identity = cbIdentity;
    $scope.cookbook = cbCookbook.cookbooks.query();

    $scope.sortOptions = [{value:"title", text:"Sort by Title"},
        {value:"published", text:"Sort by Publish Date"},
        {value:"creator", text:"Sort by Creator"},
        {value:"cookbook", text:"Sort by Cookbook"},
        {value:"rating", text:"Sort by Rating"}];
    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.newCookbook = function() {
        $location.path('/newcookbook');
    };

    $scope.deleteCookbook = function(cookbookId) {
        cbCookbook.cookbooks.remove({_id:cookbookId}, {},{}, function(reason) {
            cbNotify.error(reason);
        });

        cbNotify.notify('Cookbook Deleted');
        $location.path('/');
    };
});