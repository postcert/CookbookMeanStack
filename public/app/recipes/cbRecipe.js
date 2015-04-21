angular.module('app').factory('cbRecipe', function($resource) {
    return {
        recipes: $resource('/api/recipes/:_id', {_id: "@id"}, {
            update: {method: 'PUT', isArray: false},
            get: {method: 'GET', isArray: false},
            remove: {method: 'DELETE', isArray: false}
        }),
        recipesuser: $resource('/api/user/:user_id/recipes', {user_id: "@user_id"}, {
            get: {method: 'GET', isArray: true}
        }),
        removerecipe: $resource('/api/remove/:id/recipe', {_id: "@id"}, {
            remove: {method: 'REMOVE', isArray: false},
            delete: {method: 'DELETE', isArray: false}
        })
    }
});