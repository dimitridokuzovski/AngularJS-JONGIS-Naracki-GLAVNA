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
        { ime: "Швепс", id: 8, kolicina: 1, opis: "0.33л" }
    ]


    orders.incrementArtikl = function (artikl) {
        for (let artikl of orders.artikli) {
            artikl.kolicina++;
        }
    };

    orders.decrementArtikl = function (artikl, artiklId) {
        for (let artikl of orders.artikli) {
            if (artikl.kolicina > 1) {
                artikl.kolicina--;
            }
        }
    };

    orders.checkIfArtiklExists = function (id) {
        for (let artikl of orders.artikli) {
            if (artikl.id === id) {
                return 1
            }
        }
        return 0;
    }

    orders.addNaracki = function (artiklId) {
        if (orders.checkIfArtiklExists(artiklId)) {
            for (let artikl of orders.artikli) {
                if (artikl.id === artiklId) {
                    artikl.kolicina++;
                }
            }
        }
        else {
            orders.naracaniArtikli.push(orders.artikli);

        }
    }

    orders.deleteArtikl = function (index) {
        orders.naracaniArtikli.splice(index, 1);
    }




    // orders.deleteArtikl = function () {
    //     let artiklToDelete = orders.artikl
    //     for (let i = 0; i < orders.artikli.length; i++) {
    //         if (artiklToDelete === orders.artikli[i]) {
    //             orders.artikli.splice(i, 1);
    //         }
    //     }
    // }
}

function config($stateProvider) {
    console.log('orders')
    $stateProvider.state('orders', {
        url: '/orders',
        templateUrl: '/app/pages/orders/orders.html',
        controller: 'ordersController as orders'
    })


}




