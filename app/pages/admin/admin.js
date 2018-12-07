angular.module("app.pages.admin", [
    "app.pages.admin.directives.admin-directive",
    "app.pages.admin.services.admin-service",

])
    .config(config)
    .controller("adminController", adminController)
function adminController() {

}

function config($stateProvider) {
    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: '/app/pages/admin/admin.html',
        controller: 'adminController as admin'
    })
}
