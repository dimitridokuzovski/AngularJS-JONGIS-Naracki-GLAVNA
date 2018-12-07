angular.module("app.pages.orders.directives.orders-directive", [])
    .directive("ordersDirective", ordersDirective)
function ordersDirective() {
    return {
        restrict: "EA",
        templateUrl: "/app/pages/orders/directives/orders-directive.html"
    }
}
