angular.module("app.pages.orders",[
    "app.pages.orders.directives.orders-directive"
])
.config(config)
.controller("ordersController",ordersController)
function ordersController () {
    
}
function config($stateProvider) {
    console.log('orders')
    $stateProvider.state('orders', {
        url: '/orders',
        templateUrl: '/app/pages/orders/orders.html',
        controller: 'ordersController as orders'
    })
}