angular.module('app').factory('cbCookbook', function($resource) {
    return {
        cookbooks: $resource('/api/cookbooks/:_id', {_id: "@id"}, {
            update: {method: 'GET', isArray: true}
        }),
        cookbooksuser: $resource('/api/user/{:user_id}/cookbooks', {user_id: "@user_id"}, {
            update: {method: 'GET', isArray: true}
        })
    }
});