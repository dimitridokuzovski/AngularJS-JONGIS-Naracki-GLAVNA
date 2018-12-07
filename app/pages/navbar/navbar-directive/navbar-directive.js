angular.module("app.pages.navbar-directive", [])
    .directive("navbarDirective", navbarDirective)
function navbarDirective() {
    return{
        restrict:"EA",
        templateUrl:"/app/pages/navbar/navbar-directive/navbar-directive.html"
    }


}