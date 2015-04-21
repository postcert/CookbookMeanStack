angular.module('app').factory('cbCookbook', function($resource) {
    return {
        cookbooks: $resource('/api/cookbooks/:_id', {_id: "@id"}, {
            update: {method: 'PUT', isArray: false},
            get: {method: 'GET', isArray: false},
            remove: {method: 'DELETE', isArray: false}
        }),
        cookbooksuser: $resource('/api/user/:user_id/cookbooks', {user_id: "@user_id"}, {
            get: {method: 'GET', isArray: true}
        })
    }
});