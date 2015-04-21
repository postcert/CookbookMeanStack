angular.module('app').controller('cbRecipeEditCtrl', function($scope, $location, $routeParams, cbRecipe, cbIdentity, cbRecipeHelp, cbNotify) {

    var recipe = cbRecipe.recipes.get({_id:$routeParams.id});
    $scope.identity = cbIdentity;

    $scope.editRecipe = function() {

        var newRecipeData = {
            title: $scope.title,
            creator: cbIdentity.currentUser.userName,
            featured: true,
            published: new Date(),
            cookbook: $scope.cookbook,
            cooktimeHour: $scope.cooktimeHour,
            cooktimeMinute: $scope.cooktimeMinute,
            difficulty: $scope.difficulty,
            directions: [$scope.directions0, $scope.directions1, $scope.directions2, $scope.directions3, $scope.directions4],
            ingredients: [$scope.ingredients0, $scope.ingredients1, $scope.ingredients2, $scope.ingredients3, $scope.ingredients4]
        };

        cbRecipe.recipes.remove({_id: $routeParams.id}, {}, function () {
        }, function (reason) {
            cbNotify.error(reason);
        });

        cbRecipeHelp.createRecipe(newRecipeData).then(function () {
            cbNotify.notify('New Recipe created!');
            $location.path('/');
        }, function (reason) {
            cbNotify.error(reason);
        })
    };

});