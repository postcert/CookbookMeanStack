angular.module('app').controller('cbMainCtrl', function ($scope, cbRecipe) {
    $scope.recipes = cbRecipe.recipes.query();
});