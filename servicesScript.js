var app = angular.module("servicesApp", ["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider
    // Start of Services

        .when("/", {
            templateUrl: "serCycling.html "
        })
        .when("/serSwimming", {
            templateUrl: "serSwimming.html "
        })
        .when("/serSportsFitness", {
            templateUrl: "serSportsFitness.html "
        })
        .when("/serGroupX", {
            templateUrl: "serGroupX.html "
        })
        .when("/serSalonSpa", {
            templateUrl: "serSalonSpa.html "
        })
        // End of Services

});

app.controller("servicesCtrl", function($scope, $http) {
    $http.get("timetable.json ").then(function(response) {
        $scope.timetable = response.data;
    });

    // Calculate BMI
    $scope.bmi = 0;
    $scope.weight = 0;
    $scope.height = 0;
    $scope.result = " ";
    $scope.calBMI = function() {

        $scope.bmi = $scope.weight / ($scope.height / 100 * $scope.height / 100);

        if ($scope.bmi < 18.5) {
            $scope.result = "Underweight! Better gain more! ";
        } else if ($scope.bmi >= 18.5 && $scope.bmi <= 24.9) {
            $scope.result = "Normal! You are healthy! Keep it up! ";
        } else if ($scope.bmi >= 25 && $scope.bmi <= 29.9) {
            $scope.result = "Overweight! Better burn more calories! ";
        } else if ($scope.bmi >= 30) {
            $scope.result = "Obese! It need to be considered! ";
        }
        alert("Your BMI is " + $scope.bmi + " " + $scope.result);
    }
});