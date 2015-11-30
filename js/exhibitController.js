angular.module('MuseumApp')
  .controller('ExhibitController', ExhibitController);

function ExhibitController($scope) {
  // $scope.image = "../marilyn.jpg";
  $scope.image = "http://www.warhol.org/exhibitions/2012/15minuteseternal/en/img/art-marilyn-470x469.jpg";
  $scope.name = "Pop Art";
  $scope.artist = "Andy Warhol"
}