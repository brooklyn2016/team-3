var victorcruz = angular.module('victorcruz', ['ui.router']);

victorcruz.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
          url: '/',
          templateUrl: 'partials/login.html',
          controller: 'LoginCtrl'
        })
        .state('adminData', {
          url: '/view-data',
          templateUrl: 'partials/view-all.html',
          controller: 'AdminCtrl'
        })
}]);

victorcruz.controller('LoginCtrl', function($scope){
  console.log('in LoginCtrl');
});

victorcruz.controller('AdminCtrl', function($scope, $http){
  console.log("In AdminCtrl");
  $http.get('/student/data')
    .success(function(data){
      $scope.students = data;
      console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data);
    });
});
