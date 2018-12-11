angular.module("app.pages.orders", [
    "app.pages.orders.directives.orders-directive"
])
.config(config)
.controller("ordersController", ordersController)




function ordersController($scope) {
    let orders = this;
    
   
    $scope.hoverIn = function(artikl){
        this.status = true;
    };
    
    $scope.hoverOut = function(artikl){
        this.status = false;
    };


    orders.artikli = [
        { ime: "Кока-кола", id: 1, kolicina: 1, opis: "0.33л" },
        { ime: "Фанта", id: 2, kolicina: 1, opis: "0.33л" },
        { ime: "Скопско", id: 3, kolicina: 1, opis: "0.50л" },
        { ime: "Текила", id: 4, kolicina: 1, opis: "0.05л" },
        { ime: "Водка", id: 5, kolicina: 1, opis: "0.05л" },
        { ime: "Пелистерка", id: 6, kolicina: 1, opis: "1л" },
        { ime: "Еспресо", id: 7, kolicina: 1, opis: "0,15л" },
        { ime: "Швепс", id: 8, kolicina: 1, opis: "0.33л" }
    ]
 

    
}

function config($stateProvider) {
    console.log('orders')
    $stateProvider.state('orders', {
        url: '/orders',
        templateUrl: '/app/pages/orders/orders.html',
        controller: 'ordersController as orders'
    })


}




