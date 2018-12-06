angular.module("mainAppModule", [
  "ui.router",
  "app.pages",
  'app.services',
  "ui.bootstrap",

])
  .controller("mainAppController", mainAppController)
function mainAppController($scope) {
  let mainApp = this;
  mainApp.testModel = 'OK';
}
