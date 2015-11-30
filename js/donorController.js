angular.module('MuseumApp')
  .controller('DonorController', DonorController);

function DonorController($scope) {
  $scope.email = 'development@momamuseum.org';
  $scope.phone = '212-123-4567';
  $scope.amounts = [50, 100, 250, 500, 1000, 5000];
}