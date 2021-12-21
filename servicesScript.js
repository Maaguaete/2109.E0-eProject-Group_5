$(document).ready(function() {
    $('#myPackage').change(function() {
        let myPackage = $('#myPackage').val();
        if (myPackage == "multivisit20" || myPackage == "multivisit10") {
            $('#week').css('display', 'none');
        } else {
            $('#week').css('display', 'block');
        }
    });
});


var app = angular.module("servicesApp", ["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "services_subpages/serCycling.html "
        })
        .when("/serSwimming", {
            templateUrl: "services_subpages/serSwimming.html ",
            controller: "swimmingCtrl"
        })
        .when("/serSportsFitness", {
            templateUrl: "services_subpages/serSportsFitness.html "
        })
        .when("/serGroupX", {
            templateUrl: "services_subpages/serGroupX.html ",
            controller: "groupXCtrl"
        })
        .when("/serSalonSpa", {
            templateUrl: "services_subpages/serSalonSpa.html "
        })
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
        // alert("Your BMI is " + $scope.bmi + " " + $scope.result);
        $('#BMI').addClass('d-inline');
    }

    // Calculate the total price when user choose the package and duration
    $scope.packagePrice = 0;
    $scope.discountRate = 0;
    $scope.duration = 0;
    $scope.discountPrice = 0;
    $scope.totalCost = 0;
    $scope.calCost = function() {

        switch ($scope.packages) {
            case "platinum":
                $scope.packagePrice = 140;
                $scope.perweek = "/week";
                break;
            case "premium":
                $scope.packagePrice = 79.9;
                $scope.perweek = "/week";
                break;
            case "power":
                $scope.packagePrice = 49.9;
                $scope.perweek = "/week";
                break;
            case "multivisit20":
                $scope.packagePrice = 440;
                $scope.duration = 1;
                $scope.perweek = "";
                break;
            case "multivisit10":
                $scope.packagePrice = 259;
                $scope.duration = 1;
                $scope.perweek = "";
                break;
            default:
                $scope.packagePrice = 0;
                break;
        }
        $scope.discountPrice = $scope.packagePrice * $scope.duration * $scope.discountRate;
        $scope.totalCost = $scope.packagePrice * $scope.duration - $scope.discountPrice;
        // Then display button link to membership page
        $('#beMember').addClass("d-block");
    }
});