angular.module("app.pages.signup", [
    "app.pages.signup.directives.signup-directive",
    
])
    .config(config)
    .controller("signupController", signupController)
function signupController() {
}

function config($stateProvider) {
    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: '/app/pages/signup/signup.html',
        controller: 'signupController as signup'
    })
}
