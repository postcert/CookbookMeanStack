angular.module('app').factory('cbRecipe', function($resource) {
    return {
        cookbooks: $resource('/api/recipes/:_id', {_id: "@id"}, {
            update: {method: 'GET', isArray: true}
        }),
        cookbooksuser: $resource('/api/recipesuser/:user_id', {user_id: "@user_id"}, {
            update: {method: 'GET', isArray: true}
        })
    }
});