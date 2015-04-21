angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {auth: function(cbAuth) {
            return cbAuth.authorizeCurrentUserForRoute('admin');
        }},
        user: {auth: function(cbAuth) {
            return cbAuth.authorizeAuthenticatedUserForRoute();
        }}
    };

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'cbMainCtrl'})
        .when('/admin/users', { templateUrl: '/partials/admin/user-list',
            controller: 'cbUserListCtrl', resolve: routeRoleChecks.admin
         })
        .when('/signup', { templateUrl: '/partials/account/signup',
            controller: 'cbSignupCtrl'
        })
        .when('/profile', { templateUrl: '/partials/account/profile',
            controller: 'cbProfileCtrl', resolve: routeRoleChecks.user
        })
        .when('/recipes', { templateUrl: '/partials/recipes/recipe-list',
            controller: 'cbRecipeListCtrl'
        })
        .when('/recipes/:id', { templateUrl: '/partials/recipes/recipe-details',
            controller: 'cbRecipeDetailCtrl'
        })
        .when('/mycookbooks', { templateUrl: '/partials/cookbooks/cookbook-user',
            controller: 'cbCookbookUserCtrl', resolve:routeRoleChecks.user
        })
        .when('/cookbooks', { templateUrl: '/partials/cookbooks/cookbook-list',
            controller: 'cbCookbookListCtrl'
        })
        .when('/cookbooks/:id', { templateUrl: '/partials/cookbooks/cookbook-details',
            controller: 'cbCookbookDetailCtrl'
        })
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    })
});