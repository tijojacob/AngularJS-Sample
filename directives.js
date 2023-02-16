//directives
weatherApp.directive("weatherReport",function()
{
    return {
        restrict : 'E',
        templateUrl : 'directives/weatherReport.html',
        replace : false,
        scope :{
            weatherDay : "=", 
            convertToCel : "&",
            convertToDate : "&",
            dateFormat : "@"
        }
    }
});