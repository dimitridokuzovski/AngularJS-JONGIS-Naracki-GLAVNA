angular.module("app.pages.orders", [
    "app.pages.orders.directives.orders-directive",
    'app.pages.orders.services',

])
    .config(config)
    .controller("ordersController", ordersController)

function ordersController($scope, $timeout, $http) {

    let orders = this;
    orders.naracki = []


    orders.hoverIn = function (artikl) {
        artikl.status = true;
    };

    orders.hoverOut = function (artikl) {
        artikl.status = false;

    };

    let setArtikli = function () {
      

        orders.drinks = [
            
            {
                ime: "Coca-cola",
                id: 1,
                kolicina: 1,
                opis: "0.33л"
            },

            {
                ime: "Fanta",
                id: 2,
                kolicina: 1,
                opis: "0.33л"
            },

            {
                ime: "Schweppes",
                id: 8,
                kolicina: 1,
                opis: "0.33л"
            },
            {
                ime: "Sprite",
                id: 20,
                kolicina: 1,
                opis: "0.33л"
            },

            {
                ime: "Pelisterka",
                id: 6,
                kolicina: 1,
                opis: "1л"
            },

            {
                ime: "Skopsko",
                id: 3,
                kolicina: 1,
                opis: "0.50л"
            },
            {
                ime: "Zlaten Dab",
                id: 19,
                kolicina: 1,
                opis: "0.50л"
            },

            {
                ime: "Whiskey",
                id: 21,
                kolicina: 1,
                opis: "0.05л"
            },

            {
                ime: "Tequilla",
                id: 4,
                kolicina: 1,
                opis: "0.05л"
            },

            {
                ime: "Vodka",
                id: 5,
                kolicina: 1,
                opis: "0.05л"
            },

            {
                ime: "Nescafé",
                id: 23,
                kolicina: 1,
                opis: "cold or hot"
            },

            {
                ime: "Espresso",
                id: 7,
                kolicina: 1,
                opis: "large"
            },
            
            {
                ime: "Macchiato small",
                id: 17,
                kolicina: 1,
                opis: "small"
            },

            {
                ime: "Macchiato large",
                id: 18,
                kolicina: 1,
                opis: "large"
            },

            {
                ime: "White wine",
                id: 12,
                kolicina: 1,
                opis: "0.25л"
            },
            {
                ime: "Red wine",
                id: 16,
                kolicina: 1,
                opis: "0.25л"
            },
        ],

        orders.food = [
            {
                ime: "Hamburger (Beef)",
                id: 9,
                kolicina: 1,
                opis: "with beef meat"
            },
            {
                ime: "Hamburger (pork)",
                id: 10,
                kolicina: 1,
                opis: "with pork meat"
            },
            {
                ime: "Chickenburger",
                id: 11,
                kolicina: 1,
                opis: "with chicken meat"
            },

            {
                ime: "Pork Rib",
                id: 22,
                kolicina: 1,
                opis: "Pork"
            },

            {
                ime: "Homemade sausage",
                id: 14,
                kolicina: 1,
                opis: "Pork"
            },
            {
                ime: "Chicken Breasts",
                id: 15,
                kolicina: 1,
                opis: "Grilled"
            },

            {
                ime: "Spaghetti",
                id: 13,
                kolicina: 1,
                opis: "Bolognese"
            },
        ]

        console.log(angular.toJson(orders.drinks))
        localStorage.setItem('drinks', JSON.stringify(orders.drinks));
        localStorage.setItem('food', JSON.stringify(orders.food));
        orders.artikli = orders.food.concat(orders.drinks)
    }
    setArtikli()


    orders.incrementArtikl = function (id) {
        for (let naracanArtikl of orders.naracki) {
            if (naracanArtikl.id === id) {
                naracanArtikl.kolicina++;
            }
        }
    }

    orders.decrementArtikl = function (id) {
        for (let naracanArtikl of orders.naracki) {
            if (naracanArtikl.kolicina > 1 && naracanArtikl.id === id) {
                naracanArtikl.kolicina--;
            }
        }
    };

    orders.checkIfArtiklExists = function (id) {
        for (let naracanArtikl of orders.naracki) {
            if (naracanArtikl.id === id) {
                return 1
            }
        }
        return 0;
    }

    orders.addNaracki = function (id) {
        if (orders.checkIfArtiklExists(id)) {
            for (let naracanArtikl of orders.naracki) {
                if (naracanArtikl.id === id) {
                    naracanArtikl.kolicina++;
                }
            }
        }
        else {
            for (let artikl of orders.artikli) {
                if (artikl.id === id) {
                    orders.naracki.push(artikl);
                }
            }
        }
    }

    orders.deleteArtikl = function ($index) {
        orders.naracki.splice($index, 1);
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



