angular.module('app.services')
  .service('GraphService',['$http', '$q', function($http, $q) {

      this.chart = function(type) {
      return {
        chart: {
            type: type,
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 30,
                left: 40
            },
            x: function(d){return d[0];},
            y: function(d){return d[1];},
            useVoronoi: false,
            clipEdge: true,
            duration: 100,
            useInteractiveGuideline: true,
            xAxis: {
                showMaxMin: false,
                tickFormat: function(d) {
                    return d3.time.format('%x')(new Date(d))
                }
            },
            yAxis: {
                tickFormat: function(d){
                    return d3.format(',.2f')(d);
                }
            },
            zoom: {
                enabled: true,
                scaleExtent: [1, 10],
                useFixedDomain: false,
                useNiceScale: false,
                horizontalOff: false,
                verticalOff: true,
                unzoomEventType: 'dblclick.zoom'
            }
        }
      }
  };

    this.candleChart = function() {
      return  {
           chart: {
               type: 'candlestickBarChart',
               height: 450,
               margin : {
                   top: 20,
                   right: 20,
                   bottom: 40,
                   left: 60
               },
               x: function(d){ return d['date']; },
               y: function(d){ return d['close']; },
               duration: 100,

               xAxis: {
                   axisLabel: 'Dates',
                   tickFormat: function(d) {
                       return d3.time.format('%x')(new Date(d))
                   },
                   showMaxMin: false
               },

               yAxis: {
                   axisLabel: 'Stock Price',
                   tickFormat: function(d){
                       return '$' + d3.format(',.1f')(d);
                   },
                   showMaxMin: false
               },
               zoom: {
                   enabled: true,
                   scaleExtent: [1, 10],
                   useFixedDomain: false,
                   useNiceScale: false,
                   horizontalOff: false,
                   verticalOff: true,
                   unzoomEventType: 'dblclick.zoom'
               }
           }
       };

    }

}]);
