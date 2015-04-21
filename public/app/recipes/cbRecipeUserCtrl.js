angular.module('app').controller('cbRecipeUserCtrl', function($scope, $location, cbRecipe, cbIdentity) {
    $scope.recipes = cbRecipe.recipesuser.get({ user_id: cbIdentity.currentUser.userName });

    $scope.sortOptions = [{value:"title", text:"Sort by Title"},
        {value:"published", text:"Sort by Publish Date"},
        {value:"creator", text:"Sort by Creator"},
        {value:"cookbook", text:"Sort by Cookbook"},
        {value:"difficulty", text:"Sort by Difficulty"}];
    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.newRecipe = function() {
        $location.path('/newrecipe');
    };
});