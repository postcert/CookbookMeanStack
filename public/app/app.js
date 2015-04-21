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
            controller: 'cbUserListCtrl', resolve:routeRoleChecks.admin
         })
        .when('/users/:id', { templateUrl: '/partials/admin/user-page',
            controller: 'cbUserPageCtrl', resolve:routeRoleChecks.admin
        })
        .when('/signup', { templateUrl: '/partials/account/signup',
            controller: 'cbSignupCtrl'
        })
        .when('/profile', { templateUrl: '/partials/account/profile',
            controller: 'cbProfileCtrl', resolve:routeRoleChecks.user
        })
        .when('/recipes', { templateUrl: '/partials/recipes/recipe-list',
            controller: 'cbRecipeListCtrl'
        })
        .when('/recipes/:id', { templateUrl: '/partials/recipes/recipe-details',
            controller: 'cbRecipeDetailCtrl'
        })
        .when('/newrecipe', { templateUrl: '/partials/recipes/recipe-new',
            controller: 'cbRecipeNewCtrl', resolve:routeRoleChecks.user
        })
        .when('/editrecipe/:id', { templateUrl: '/partials/recipes/recipe-edit',
            controller: 'cbRecipeEditCtrl', resolve:routeRoleChecks.user
        })
        .when('/mycookbooks', { templateUrl: '/partials/cookbooks/cookbook-user',
            controller: 'cbCookbookUserCtrl', resolve:routeRoleChecks.user
        })
        .when('/myrecipes', { templateUrl: '/partials/recipes/recipe-user',
            controller: 'cbRecipeUserCtrl', resolve:routeRoleChecks.user
        })
        .when('/cookbooks', { templateUrl: '/partials/cookbooks/cookbook-list',
            controller: 'cbCookbookListCtrl'
        })
        .when('/cookbooks/:id', { templateUrl: '/partials/cookbooks/cookbook-details',
            controller: 'cbCookbookDetailCtrl'
        })
        .when('/newcookbook', { templateUrl: '/partials/cookbooks/cookbook-new',
            controller: 'cbCookbookNewCtrl', resolve:routeRoleChecks.user
        })
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    })
});