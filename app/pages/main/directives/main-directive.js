angular.module("app.pages.main.directives.main-directive", [])
    .directive("mainDirective", mainDirective)
function mainDirective() {
    return {
        restrict: 'EA',
        templateUrl: '/app/pages/main/directives/main-directive.html'

    }
}
