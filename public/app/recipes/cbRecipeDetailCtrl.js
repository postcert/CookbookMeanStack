angular.module('app').controller('cbRecipeDetailCtrl', function($scope, $location, cbRecipe, cbRecipeHelp, cbNotify, cbIdentity, $routeParams) {
    $scope.recipe = cbRecipe.recipes.get({_id:$routeParams.id});
    $scope.identity = cbIdentity;

    $scope.deleteRecipe = function() {
        cbRecipe.recipes.remove({_id:$routeParams.id}, {},{}, function(reason) {
            cbNotify.error(reason);
        });

        cbNotify.notify('Recipe Deleted');
        $location.path('/');
    };
    $scope.editRecipe = function() {
        $location.path('/editrecipe/' + $routeParams.id);
    }
});