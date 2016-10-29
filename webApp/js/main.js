var victorcruz = angular.module('victorcruz', ['ui.router']);

victorcruz.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'partials/home.html',
          controller: 'HomeCtrl'
        })
        .state('create',{
          url: '/create',
          templateUrl: 'partials/_form.html',
          controller: 'CreateCtrl'
        })
        .state('edit',{
          url: '/edit-wallet',
          templateUrl: 'partials/_form.html',
          controller: 'EditWalletCtrl'
        });
}]);

walletLess.controller('HomeCtrl', function($scope){
  console.log("In HomeCtrl");
});

walletLess.controller('CreateCtrl', function($scope, $http){
  console.log("In CreateCrtl");
  $scope.formData = {};
  $scope.createWallet = function(){
    $http.post('/api/wallets', $scope.formData)
      .success(function(data){
        $scope.formData = {};
        $scope.wallets = data;
        console.log(data);
      })
      .error(function(data){
        console.log('Error: '+data);
      });
  };
});

  walletLess.controller('ViewSingleCtrl', function($scope, $http, $stateParams){
    //view info for a single wallet
    console.log("in ViewSingleCtrl");
    var id = $stateParams.id;
    console.log(id);
    $scope.getWallet = function(id){
      $http.get('/api/wallets/' + id)
        .success(function(data) {
            $scope.wallet = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
      };
  });

  walletLess.controller('EditWalletCtrl', function($scope, $http){
    //edit a single wallet's info
    console.log("in EditWalletCtrl");
  });
