angular.module("app.pages.signup.directives.signup-directive", [])
    .directive("signupDirective", signupDirective)
function signupDirective() {
    return {
        restrict: "EA",
        templateUrl: "/app/pages/signup/directives/signup-directive.html"
    }
}
