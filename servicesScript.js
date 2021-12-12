$(document).ready(function() {
    $('#myPackage').change(function() {
        let myPackage = $('#myPackage').val();
        if (myPackage == "multivisit20" || myPackage == "multivisit10") {
            // $('#duration').empty();
            // $('#duration').prop('disabled', true);
            $('#week').css('display', 'none');
        } else {
            // $('#duration').prop('disabled', false);
            $('#week').css('display', 'block');
            // $('#duration').empty();
            // setDuration();
        }
    });

});
// function setDuration() {
//     for (var i = 1; i <= 50; i++) {
//         if (i == 1) {
//             $("#duration").append("<option value=" + i + ">" + i + " week</option>");
//         } else {
//             $("#duration").append("<option value=" + i + ">" + i + " weeks</option>");
//         }
//     }
// }

var app = angular.module("servicesApp", ["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "serCycling.html "
        })
        .when("/serSwimming", {
            templateUrl: "serSwimming.html ",
            controller: "swimmingCtrl"
        })
        .when("/serSportsFitness", {
            templateUrl: "serSportsFitness.html "
        })
        .when("/serGroupX", {
            templateUrl: "serGroupX.html ",
            controller: "groupXCtrl"
        })
        .when("/serSalonSpa", {
            templateUrl: "serSalonSpa.html "
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
        alert("Your BMI is " + $scope.bmi + " " + $scope.result);
    }

    $scope.packagePrice = 0;
    $scope.discountRate = 0;
    $scope.duration = 0;
    $scope.discountPrice = 0;
    $scope.totalCost = 0;
    $scope.calCost = function() {

        switch ($scope.Package) {
            case "platinum":
                $scope.packagePrice = 140;
                break;
            case "premium":
                $scope.packagePrice = 79.9;
                break;
            case "power":
                $scope.packagePrice = 49.9;
                break;
            case "multivisit20":
                $scope.packagePrice = 440;
                $scope.duration = 1;
                break;
            case "multivisit10":
                $scope.packagePrice = 259;
                $scope.duration = 1;
                break;
            default:
                $scope.packagePrice = 0;
                break;
        }
        $scope.discountPrice = $scope.packagePrice * $scope.duration * $scope.discountRate;
        $scope.totalCost = $scope.packagePrice * $scope.duration - $scope.discountPrice;
        $('#beMember').addClass("d-block");
    }

    app.controller('swimmingCtrl', function($scope, $location, $anchorScroll) {
        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
        }
    });
    app.controller('groupXCtrl', function($scope, $location, $anchorScroll) {
        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
        }
    });
});