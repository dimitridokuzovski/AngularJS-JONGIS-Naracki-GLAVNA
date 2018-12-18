angular.module("mainAppModule", [
  "ui.router",
  "app.pages",
  "ui.bootstrap",
  "app.services"

])
  .controller("mainAppController", mainAppController)
  .config(function ($stateProvider,$urlRouterProvider) {
    console.log("config")

    $urlRouterProvider.when('','/login');
    $urlRouterProvider.when('/','/login');
    $urlRouterProvider.otherwise('/login');
 

    $stateProvider.state({
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>'
    })

  });

function mainAppController($scope) {
  console.log("controller")
}

