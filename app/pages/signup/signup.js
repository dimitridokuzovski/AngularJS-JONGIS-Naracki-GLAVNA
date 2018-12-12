angular.module("app.pages.signup", [
    "app.pages.signup.directives.signup-directive",

])
    .config(config)
    .controller("signupController", signupController)
function signupController($scope, $state) {
    
    let signup = this
    signup.clear = function () {
            signup.user = {
            ime: "",
            prezime: "",
            code: "",
        }

    }

    signup.backToLogin = function () {
        $state.transitionTo('login');
    }
}

function config($stateProvider) {
    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: '/app/pages/signup/signup.html',
        controller: 'signupController as signup'
    })
}
