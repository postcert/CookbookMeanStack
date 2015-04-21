angular.module('app').factory('cbRecipe', function($resource) {
    return {
        recipes: $resource('/api/recipes/:_id', {_id: "@id"}, {
            update: {method: 'GET', isArray: true}
        }),
        recipesuser: $resource('/api/recipesuser/:user_id', {user_id: "@user_id"}, {
            update: {method: 'GET', isArray: true}
        })
    }
});