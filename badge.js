var app = angular.module('nameBadge', []);

app.controller('MainController', ['$scope', function ($scope) {
    var validate = function (value) {
        if (typeof value == 'undefined' || value == '') {
            return false;
        }

        if (value.length < 3) {
            return false;
        }


        return true;
    };

    $scope.click = function () {
        if (validate($scope.FirstName) == false ||
            validate($scope.LastName) == false ||
            validate($scope.Phone) == false ||
            validate($scope.Email) == false ||
            validate($scope.Food) == false ||
            validate($scope.About) == false ||
            validate($scope.Birth) == false) {
            alert("input invalid");
            return
        }
        $scope.name = $scope.FirstName + ' ' + $scope.LastName;
        $scope.phone = $scope.Phone;
        $scope.email = $scope.Email;
        $scope.birth = $scope.Birth;
        $scope.food = $scope.Food;
        $scope.about = $scope.About;
    }
            }]);