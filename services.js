//customService
weatherApp.service('cityService', function() {
   
    var self = this;
    this.city = 'London,UK';    
    this.api = ''
    this.days = '2';
});


weatherApp.service('weatherService', ['$resource','$log', function($resource,$log) {
   this.GetWeather = function(city, days, api){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast",
        // {
        //     callback : "JSON_CALLBACK"
        // },
        // {
        //     get:{method : "JSONP"}
        // }
        );
        $log.info(weatherAPI);
        return weatherAPI.get({q:city, cnt:days, appid:api, limit:0});
   }
}]);