angular.module("app.pages.admin.directives.admin-directive", [])
    .directive("adminDirective", adminDirective)
function adminDirective() {
    return {
        restrict: 'EA',
        templateUrl: '/app/pages/admin/directives/admin-directive.html'

    }
}

