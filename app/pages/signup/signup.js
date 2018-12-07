angular.module("app.pages.signup", [])
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
