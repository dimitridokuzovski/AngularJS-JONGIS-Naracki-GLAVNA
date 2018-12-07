angular.module("app.pages.main", [
    "app.pages.main.directives.main-directive",
    "app.pages.main.services.main-service",

])
    .config(config)
    .controller("mainController", mainController)
function mainController() {
    
}
function config($stateProvider) {
    $stateProvider.state('main', {
        url: '/main',
        templateUrl: '/app/pages/main/main.html',
        controller: 'mainController as main'
    })
}

