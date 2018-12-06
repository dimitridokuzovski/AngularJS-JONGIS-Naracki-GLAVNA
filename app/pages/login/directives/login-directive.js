angular.module("app.pages.login.directives.login-directive", [])
    .directive("loginDirective", loginDirective)
function loginDirective() {
    return {
        restrict: 'EA',
        templateUrl: '/app/pages/login/directives/login-directive.js'

    }
}