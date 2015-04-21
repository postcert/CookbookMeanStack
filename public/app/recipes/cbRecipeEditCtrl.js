angular.module('app').controller('cbRecipeEditCtrl', function($scope, $location, $routeParams, cbRecipe, cbIdentity, cbNotify) {

    $scope.recipe = cbRecipe.recipes.get({_id:$routeParams.id});
    $scope.identity = cbIdentity;

    $scope.title = recipe.title;
    $scope.cookbook = recipe.cookbook;
    $scope.cooktimeHour = recipe.cookTimeHour;
    $scope.cooktimeMinue = recipe.cookTimeMinute;
    $scope.directions0 = recipe.directions0;
    $scope.directions1 = recipe.directions1;
    $scope.directions2 = recipe.directions2;
    $scope.directions3 = recipe.directions3;
    $scope.directions4 = recipe.directions4;
    $scope.ingredients0 = recipe.ingredients0;
    $scope.ingredients1 = recipe.ingredients1;
    $scope.ingredients2 = recipe.ingredients2;
    $scope.ingredients3 = recipe.ingredients3;
    $scope.ingredients4 = recipe.ingredients4;
});