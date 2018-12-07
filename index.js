angular.module("mainAppModule", [
  "ui.router",
  "app.pages",
  'app.services',
  "ui.bootstrap",

])
  .controller("mainAppController", mainAppController)
.config(function ($stateProvider) {
  console.log("config")
  $stateProvider.state({
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  })

});
  
function mainAppController($scope) {
  console.log("controller")
}
