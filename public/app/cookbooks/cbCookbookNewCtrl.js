angular.module('app').controller('cbCookbookNewCtrl', function($scope, $location, cbAuth, cbIdentity, cbAddCookbook, cbNotify) {

    $scope.addCookbook = function() {
        var newCookbookData = {
            title: $scope.title,
            creator: cbIdentity.currentUser.userName,
            featured: true,
            published: new Date()
        };

        cbAddCookbook.createCookbook(newCookbookData).then(function() {
            cbNotify.notify('New Cookbook created!');
            $location.path('/');
        }, function(reason) {
            cbNotify.error(reason);
        })
    }
});