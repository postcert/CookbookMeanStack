angular.module('app').controller('cbRecipeNewCtrl', function($scope, $location, cbAuth, cbIdentity, cbRecipeHelp, cbNotify) {

    $scope.addRecipe = function() {
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

        cbRecipeHelp.createRecipe(newRecipeData).then(function() {
            cbNotify.notify('New Recipe created!');
            $location.path('/');
        }, function(reason) {
            cbNotify.error(reason);
        })
    }
});