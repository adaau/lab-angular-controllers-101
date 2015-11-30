angular.module('MuseumApp')
  .controller('ExhibitController', ExhibitController);

function ExhibitController($scope) {
  $scope.image = "../marilyn.jpg";
  $scope.name = "Pop Art";
  $scope.artist = "Andy Warhol"
}