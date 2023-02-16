//routes
weatherApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/foreCast', {
        templateUrl: 'pages/foreCast.html',
        controller: 'foreCastController'
    })       

    .when('/foreCast/:days', {
        templateUrl: 'pages/foreCast.html',
        controller: 'foreCastController'
    }) 
    
});