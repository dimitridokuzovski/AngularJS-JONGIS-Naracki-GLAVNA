angular.module("app.pages.login", [
    "app.pages.login.directives.login-directive",
    "app.pages.login.services.login-service",

])
    .config(config)
    .controller("loginController", loginController)
function loginController() {

}

function config($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: '/app/pages/login/login.html',
        controller: 'loginController as login'
    })
}