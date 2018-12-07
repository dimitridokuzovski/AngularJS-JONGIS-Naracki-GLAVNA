angular.module("app.pages.navbar",[
    "app.pages.navbar-directive"
])
.controller("navbarController",navbarController)
.config(config)
function navbarController() {

}

function config($stateProvider) {
    $stateProvider.state('navbar', {
        url: '/navbar',
        templateUrl: '/app/pages/navbar/navbar.html',
        controller: 'navbarController as navbar'
    })
}