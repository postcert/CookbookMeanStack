angular.module('app').controller('cbRecipeListCtrl', function($scope, cbRecipe) {
    $scope.recipes = cbRecipe.query();

    $scope.sortOptions = [{value:"title", text:"Sort by Title"},
        {value:"published", text:"Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
});