angular.module("app.pages.orders.directives.orders-directive", [])
    .directive("ordersDirective", ordersDirective)
function ordersDirective() {

    function naplatiNaracka() {
        currentTableNaracka = getCurrentTableNaracka()
        for (let i = 0; i < naracki.length; i++) {
          if (naracki[i] == currentTableNaracka)
            naracki.splice(i, 1)
          console.log(currentTableNaracka.length)
        }
        setItemToStorage("naracki", naracki);
        let admin = document.getElementById('admin');
        if (!admin) {
          window.location = "../../main.html"
        }
        setItemToStorage("naracki", naracki);
      }


    return {
        restrict: "EA",
        templateUrl: "/app/pages/orders/directives/orders-directive.html",
        // scope: {'ordersController': "="},
    }

}



