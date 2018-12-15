angular.module("app.pages.orders", [
    "app.pages.orders.directives.orders-directive"
])
    .config(config)
    .controller("ordersController", ordersController)




function ordersController($scope, $timeout) {
    let orders = this;
    orders.naracaniArtikli = []


    orders.hoverIn = function (artikl) {
        artikl.status = true;
    };

    orders.hoverOut = function (artikl) {
        artikl.status = false;

    };

  


    orders.artikli = [
        { ime: "Кока-кола", id: 1, kolicina: 1, opis: "0.33л" },
        { ime: "Фанта", id: 2, kolicina: 1, opis: "0.33л" },
        { ime: "Скопско", id: 3, kolicina: 1, opis: "0.50л" },
        { ime: "Текила", id: 4, kolicina: 1, opis: "0.05л" },
        { ime: "Водка", id: 5, kolicina: 1, opis: "0.05л" },
        { ime: "Пелистерка", id: 6, kolicina: 1, opis: "1л" },
        { ime: "Еспресо", id: 7, kolicina: 1, opis: "0,15л" },
        { ime: "Швепс", id: 8, kolicina: 1, opis: "0.33л" },
        
    ]


    orders.incrementArtikl = function (id) {
        for (let naracanArtikl of orders.naracaniArtikli) {
            if (naracanArtikl.id === id) {
                naracanArtikl.kolicina++;
            }
        }
    }
    orders.decrementArtikl = function (id) {
        for (let naracanArtikl of orders.naracaniArtikli) {
            if (naracanArtikl.kolicina > 1 && naracanArtikl.id === id ) {
                naracanArtikl.kolicina--;
            }
        }
    };

    orders.checkIfArtiklExists = function (id) {
        for (let naracanArtikl of orders.naracaniArtikli) {
            if (naracanArtikl.id === id) {
                return 1
            }
        }
        return 0;
    }

    orders.addNaracki = function (id) {
        if (orders.checkIfArtiklExists(id)) {
            for (let naracanArtikl of orders.naracaniArtikli) {
                if (naracanArtikl.id === id) {
                    naracanArtikl.kolicina++;
                }
            }
        }
        else {
            for (let artikl of orders.artikli) {
                if (artikl.id === id) {
                    orders.naracaniArtikli.push(artikl);
                }
            }
        }
    }

    orders.deleteArtikl = function ($index) {
        orders.naracaniArtikli.splice($index, 1);
    }

}

function config($stateProvider) {
    console.log('orders')
    $stateProvider.state('orders', {
        url: '/orders',
        templateUrl: '/app/pages/orders/orders.html',
        controller: 'ordersController as orders'
    })


}




