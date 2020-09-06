var app = angular.module('myApp', []);

app.controller('myContr', function ($scope, $http) {

    $scope.showitem = false;
    $scope.message = function (page) {

        if ($scope.showitem == false) {

            $scope.showitem = page;

        } else {
            $scope.showitem = false;

        }
    }

    $scope.showPage = false;
    $scope.pageHtml = function () {

        if ($scope.showPage == false) {

            $scope.showPage = true;

        } else {
            $scope.showPage = false;

        }

    }


    $scope.showPagedel = false;
    $scope.pageHtmldel = function () {

        if ($scope.showPagedel == false) {
            $scope.showPagedel = true;

        } else {
            $scope.showPagedel = false;

        }

    }

    $http.get("article.JSON")
        .then(function (response) {


            $scope.dataArticles = response.data;

            console.log('MYdata' + response.data);
        });

});

