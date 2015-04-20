angular.module('app').controller('cbRecipeDetailCtrl', function($scope, cbRecipe, $routeParams) {
    $scope.recipe = cbRecipe.get({_id:$routeParams.id})
});