angular.module("app.pages.orders.services.orders-service", [])
    .factory("narackiService", narackiService)

function narackiService($http, $scope) {

    let getRequest = function (response) {
        $scope.naracki = response.data
    };

    let onError = function (reason) {
        $scope.error = "Се случи грешка обидете се подоцна!"
    }
    $http.get("/naracki.json")
        .then(getRequest, onError)

    return {
        getRequest: getRequest,
        onError: onError

    }
}

// $http.post('/naracki.json', {ime:'hello word!'}).
//   then(function(response) {
//   })

