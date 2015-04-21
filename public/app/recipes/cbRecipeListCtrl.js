angular.module('app').controller('cbRecipeListCtrl', function($scope, $location, cbRecipe, cbIdentity, cbNotify) {
    $scope.identity = cbIdentity;
    $scope.recipes = cbRecipe.recipes.query();

    $scope.sortOptions = [{value:"title", text:"Sort by Title"},
        {value:"published", text:"Sort by Publish Date"},
        {value:"creator", text:"Sort by Creator"},
        {value:"cookbook", text:"Sort by Cookbook"},
        {value:"difficulty", text:"Sort by Difficulty"}];
    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.newRecipe = function() {
        $location.path('/newrecipe');
    };

    $scope.deleteRecipe = function(recipeId) {
        cbRecipe.recipes.remove({_id:recipeId}, {},{}, function(reason) {
            cbNotify.error(reason);
        });

        cbNotify.notify('Recipe Deleted');
        $location.path('/');
    };
});