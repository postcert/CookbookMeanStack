angular.module('app').controller('cbCookbookDetailCtrl', function($scope, $location, cbCookbook, cbRecipe, cbIdentity, cbNotify, $routeParams) {
    $scope.thisCookbook = cbCookbook.cookbooks.get({_id:$routeParams.id});
    $scope.identity = cbIdentity;
    $scope.recipes = cbRecipe.recipes.query();

    $scope.deleteCookbook = function() {
        cbCookbook.cookbooks.remove({_id:$routeParams.id}, {},function() {
            cbNotify.notify('Cookbook Deleted');
            $location.path('/');
        }, function(reason) {
            cbNotify.error(reason);
        })
    };
});