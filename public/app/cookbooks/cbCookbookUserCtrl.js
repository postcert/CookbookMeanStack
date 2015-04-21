angular.module('app').controller('cbCookbookUserCtrl', function($scope, $location, cbCookbook, cbIdentity) {
    $scope.cookbooks = cbCookbook.cookbooksuser.get({ user_id: cbIdentity.currentUser.userName });

    $scope.sortOptions = [{value:"title", text:"Sort by Title"},
        {value:"published", text:"Sort by Publish Date"},
        {value:"creator", text:"Sort by Creator"},
        {value:"cookbook", text:"Sort by Cookbook"},
        {value:"rating", text:"Sort by Rating"}];
    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.newCookbook = function() {
        $location.path('/newcookbook');
    };
});