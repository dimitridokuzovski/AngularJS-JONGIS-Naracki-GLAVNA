angular.module("app.pages.login", [
    "app.pages.login.directives.login-directive",
    "app.pages.login.services.login-service",

])
    .config(config)
    .controller("loginController", loginController)
function loginController($scope, $state) {
    let login = this;

    login.goToSignup = function () {
        $state.transitionTo('signup');
    }

    login.loginFunction = function () {
        if (login.code == "0000") {
            $state.transitionTo('main')
        }
    }
    login.clear = function () {
        login.code = "";
    }
}

function config($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: '/app/pages/login/login.html',
        controller: 'loginController as login'
    })
}

