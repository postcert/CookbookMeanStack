angular.module('app').controller('cbUserPageCtrl', function($scope, $location, $routeParams, cbUser, cbRecipe, cbNotify, cbCookbook) {

    $scope.sortOptions = [{value:"title", text:"Sort by Title"},
        {value:"published", text:"Sort by Publish Date"},
        {value:"creator", text:"Sort by Creator"},
        {value:"cookbook", text:"Sort by Cookbook"},
        {value:"rating", text:"Sort by Rating"}];

    $scope.cookbooks = cbCookbook.cookbooks.query();
    $scope.recipes = cbRecipe.recipes.query();
    $scope.user = cbUser.get({_id:$routeParams.id});

    $scope.deleteRecipe = function(recipeId) {
        cbRecipe.recipes.remove({_id:recipeId}, {},{}, function(reason) {
            cbNotify.error(reason);
        });

        cbNotify.notify('Recipe Deleted');
        $location.path('/users/' + $routeParams.id);
    };

    $scope.deleteCookbook = function(cookbookId) {
        cbCookbook.cookbooks.remove({_id:cookbookId}, {},{}, function(reason) {
            cbNotify.error(reason);
        });

        cbNotify.notify('Cookbook Deleted');
        $location.path('/users/' + $routeParams.id);
    };

});