angular.module('app').controller('cbRecipeUserCtrl', function($scope, $location, cbRecipe, cbIdentity) {
    $scope.recipes = cbRecipe.recipesuser.query(cbIdentity.currentUser.userName);

    $scope.sortOptions = [{value:"title", text:"Sort by Title"},
        {value:"published", text:"Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.newRecipe = function() {
        $location.path('/recipes/new');
    };
});