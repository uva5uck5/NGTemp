var ecapp = angular.module('ecapp',[]);
ecapp.controller('ecController', ['$scope',
  function($scope) {
    $scope.greeting = { text: ' Welcome ', amount: '10' };
}]);