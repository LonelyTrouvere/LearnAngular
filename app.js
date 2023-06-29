(function () {
    'use strict';

    angular.module('NameCalculator', [])

    .controller('NameCalculatorController', controllerFunc);
    
    function controllerFunc($scope) {
        const LETTERS = /^[a-zA-Z ]+$/;
        $scope.meal = "";
        $scope.result = "";
        $scope.color = "";

        $scope.evalResult = () => {
            const meals = $scope.meal.split(',').filter(item => LETTERS.test(item));
            if (meals.length === 0) {$scope.result = "Pleas, enter your meal"; $scope.color = "red"}
            else
            {
            $scope.color = "green";
            if (meals.length > 3) $scope.result = "Too much";
            else
            $scope.result = "Enjoy!";
            }

            console.log($scope.color);
        };
    };

})();