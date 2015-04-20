angular.module('app').factory('cbCookbook', function($resource) {
    var CookbookResource = $resource('/api/cookbooks/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });

    return CookbookResource;
});