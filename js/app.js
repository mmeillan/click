angular.module("Clicker", ["ngSanitize"])
  .controller("ClickCtrl", function($scope, $interval) {

    $scope.score = 0;
    $scope.click = 0;
    $scope.cash = 1;
    $scope.val = 10;

    $scope.clk = function() {
      $scope.click++;
      $scope.score += $scope.cash;
      $('#clk').animateCss('shake');
    }

    // Autoclicker opts
    $scope.auto = false;
    $scope.autoInter = 1;
    var autoclicker;

    $scope.autoclk = function() {
      $scope.auto = !$scope.auto;
      if ($scope.auto) {
        autoclicker = $interval(function() {
          $scope.clk();
        }, $scope.autoInter);
      } else if (!$scope.auto) {
        $interval.cancel(autoclicker);
      }
    }
  });
