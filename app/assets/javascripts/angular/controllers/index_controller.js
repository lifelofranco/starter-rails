app.controller('IndexController', ['$scope', 'DemoService', 'GraphService',
  function($scope, DemoService, GraphService) {
    this.showNav = false;

    $scope.toggle = function() {
      this.showNav= !this.showNav;
    }

    $scope.graphs = DemoService.results();

    type = 'lineChart'
    $scope.options_comparative = GraphService.chart(type)
    $scope.data_comparative = $scope.graphs

    $scope.apple = DemoService.apple();
    console.log($scope.apple[0].values)
    _.each($scope.apple[0].values, function(a) {
      a.date = moment(a.Date, "M/D/YY").valueOf();
    })
    $scope.options_candle = GraphService.candleChart();
    $scope.appleData = $scope.apple;
    console.log($scope.apple);
  }


]);
