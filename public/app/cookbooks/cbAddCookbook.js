angular.module('app').factory('cbAddCookbook', function($q, cbCookbook) {
    return {
        createCookbook: function(newCookbookData) {
            var newCookbook = new cbCookbook.cookbooks(newCookbookData);
            var dfd = $q.defer();

            newCookbook.$save().then(function() {
                dfd.resolve();
            }, function(response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        }
    }
});