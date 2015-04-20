angular.module('app').factory('cbIdentity', function($window, cbUser) {
    var currentUser;
    if(!!$window.bootstrappedUserObject) {
        currentUser = new cbUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function() {
            return !!this.currentUser;
        },
        isAuthorized: function(role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
});