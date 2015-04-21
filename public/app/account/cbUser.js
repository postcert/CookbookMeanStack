angular.module('app').factory('cbUser', function($resource) {
    var UserResource = $resource('/api/users/:_id', {_id: "@id"}, {
        update: {method: 'PUT', isArray:false},
        get: {method: 'GET', isArray:false}
    });

    UserResource.prototype.isAdmin = function() {
        return this.roles && this.roles.indexOf('admin') > -1;
    };

    return UserResource;
});