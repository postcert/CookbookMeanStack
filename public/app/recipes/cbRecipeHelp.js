angular.module('app').factory('cbRecipeHelp', function($q, cbRecipe) {
    return {
        createRecipe: function(newRecipeData) {
            var newRecipe = new cbRecipe.recipes(newRecipeData);
            var dfd = $q.defer();

            newRecipe.$save().then(function() {
                dfd.resolve();
            }, function(response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },
        editRecipe: function(newRecipeData) {
            var newRecipe = new cbRecipe.recipes(newRecipeData);
            var dfd = $q.defer();

            newRecipe.$update().then(function() {
                dfd.resolve();
            }, function(response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        }
    }
});