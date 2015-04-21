angular.module('app').controller('cbUserPageCtrl', function($scope, $location, $routeParams, cbUser, cbRecipe, cbCookbook) {
    $scope.cookbooks = cbCookbook.cookbooks.query();
    $scope.recipes = cbRecipe.recipes.query();
    console.log($routeParams.id);
    $scope.user = cbUser.get({_id:$routeParams.id});
});