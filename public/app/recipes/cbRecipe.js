angular.module('app').factory('cbRecipe', function($resource) {
    return {
        recipes: $resource('/api/recipes/:_id', {_id: "@id"}, {
            update: {method: 'GET', isArray: true}
        }),
        recipesuser: $resource('/api/user/:user_id/recipes', {user_id: "@user_id"}, {
            update: {method: 'GET', isArray: true}
        })
    }
});