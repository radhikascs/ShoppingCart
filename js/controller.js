'use strict';

/**
 * The store controller contains two objects
 * 1. store: contains the product list
 * 2. cart: contains the shopping cart object
 * @Author- Radhika Subramanian
 */
function storeController($scope, $routeParams, DataService) {

    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // apply changes when cart items change
    $scope.cart.itemsChanged = function (e) {
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    }

    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}
