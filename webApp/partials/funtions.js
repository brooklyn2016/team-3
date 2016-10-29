'use strict';
var app = angular.module('myApp', []);


app.factory('table-students', function($http) {
    return {
        getJson: function() {
            var url = 'http://localhost:3000/student/data';
            return $http.get(url);
        }
    }
});


app.factory('table-instructor', function($http) {
    return {
        getJson: function() {
            var url = 'http://localhost:3000/student/data';
            return $http.get(url);
        }
    }
});

app.controller('', function($scope, $http) {
    $http.get("")
    .then(function (response) {$scope.names = response.data.records;});
});


getTasks.getJson().then(function(data) {
        $scope.data = data;
    });