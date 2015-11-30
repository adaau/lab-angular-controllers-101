angular.module('MuseumApp')
  .controller('DonorController', DonorController);

function DonorController($scope) {
  $scope.email = 'development@momamuseum.org';
  $scope.phone = '212-123-4567';
  $scope.amount1 = 50;
  $scope.amount2 = 100;
  $scope.amount3 = 250;
  $scope.amount4 = 500;
  $scope.amount5 = 1000;
  $scope.amount6 = 5000;

  // $scope.amounts = [50, 100, 250, 500, 1000, 5000];
}