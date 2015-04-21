angular.module('app').controller('cbRecipeListCtrl', function($scope, $location, cbRecipe, cbIdentity) {
    $scope.identity = cbIdentity;
    $scope.recipes = cbRecipe.recipes.query();

    $scope.sortOptions = [{value:"title", text:"Sort by Title"},
        {value:"published", text:"Sort by Publish Date"},
        {value:"creator", text:"Sort by Creator"},
        {value:"cookbook", text:"Sort by Cookbook"}];
    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.newRecipe = function() {
        $location.path('/newrecipe');
    };
});