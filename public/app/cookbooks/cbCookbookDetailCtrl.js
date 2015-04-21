angular.module('app').controller('cbCookbookDetailCtrl', function($scope, cbCookbook, $routeParams) {
    $scope.cookbook = cbCookbook.cookbooks.get({_id:$routeParams.id})
});