angular.module('MuseumApp')
  .controller('InfoController', InfoController);

function InfoController($scope) {
  $scope.sundayToThursday = '9:00 am to 6:30 pm';
  $scope.fridayAndSaturday = '9:00 am to 9:00 pm';
  $scope.adultPrice = 25;
  $scope.seniorPrice = 17;
  $scope.studentPrice = 12;
}