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
        deleteRecipe: function(recipeId) {
            var deleteRec = new cbRecipe.recipes(recipeId);
            var dfd = $q.defer();

            deleteRec.$remove().then(function() {
                dfd.resolver();
            }, function(response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise();
        }
    }
});