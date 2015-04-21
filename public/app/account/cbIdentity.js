angular.module('app').factory('cbIdentity', function($window, cbUser) {
    var currentUser;
    if(!!$window.bootstrappedUserObject) {
        currentUser = new cbUser.isAdmin();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function(name) {
            if (name === undefined || this.currentUser === undefined) {
                return !!this.currentUser;
            } else {
                return this.currentUser.userName === name;
            }
        },
        isAuthorized: function(role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
});