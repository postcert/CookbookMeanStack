angular.module('app').controller('cbRecipeDetailCtrl', function($scope, cbRecipe, $routeParams) {
    $scope.recipe = cbRecipe.recipes.get({_id:$routeParams.id})
});