angular.module('app').controller('cbRecipeDetailCtrl', function($scope, $location, cbRecipe, cbRecipeHelp, cbNotify, cbIdentity, $routeParams) {
    $scope.recipe = cbRecipe.recipes.get({_id:$routeParams.id});
    $scope.identity = cbIdentity;

    $scope.deleteRecipe = function() {
        cbRecipe.recipes.remove({_id:$routeParams.id}, {},function() {
            cbNotify.notify('Recipe Deleted');
            $location.path('/');
        }, function(reason) {
            cbNotify.error(reason);
        })
    };
    $scope.editRecipe = function() {
        $location.path('/editrecipe/' + $routeParams.id);
    }
});