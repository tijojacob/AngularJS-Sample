
//controllers
weatherApp.controller('homeController', ['$scope','$location','cityService', function($scope,$location,cityService) {

    $scope.city = cityService.city;
    $scope.api = cityService.api;
    $scope.days = cityService.days;

    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    $scope.$watch('api', function() {
        cityService.api = $scope.api;
     });
     $scope.$watch('days', function() {
        cityService.days = $scope.days;
     });

     $scope.submit = function(){
        $location.path("/foreCast");
     }; 


}]);

weatherApp.controller('foreCastController', ['$scope','$log','$routeParams','cityService','weatherService', 
function($scope,$log,$routeParams,cityService,weatherService) {
    $scope.city = cityService.city;
    $scope.api = cityService.api;
    $scope.days = $routeParams.days || cityService.days;
    $log.info($scope.city);
    $log.info($scope.api);
    $log.info($scope.days);

    $scope.weatherResult = weatherService.GetWeather($scope.city,$scope.days,$scope.api);
    
    $scope.converttoCelcius = function(degK)
    {
        return Math.round(parseFloat(degK) - 273.15) ;
    }
    $scope.returntoDate = function(dt)
    {
        return new Date(dt*1000) ;
    }
}]);

