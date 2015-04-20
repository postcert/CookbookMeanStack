angular.module('app').controller('cbCookbookDetailCtrl', function($scope, cbCookbook, $routeParams) {
    $scope.cookbook = cbCookbook.get({_id:$routeParams.id})
});