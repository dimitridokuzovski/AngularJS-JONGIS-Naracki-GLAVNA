angular.module("app.services.orders-service", [])
    .factory("ordersService", ordersService)

function ordersService($http) {


    function getRequest() {

        $http.get('/orders.json')
        successs(function (ime, id, kolicina, opis) {
        })
        error(function (ime, id, kolicina, opis) {
        })
    }


    function postRequest() {

        $http.get("/orders.json")
        successs(function (ime, id, kolicina, opis) {
        })
        error(function (ime, id, kolicina, opis) {
        })
    }
}