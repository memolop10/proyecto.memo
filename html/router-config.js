app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "comunidad.html"
    })
    .when("/eventos", {
        templateUrl : "eventos.html"
    })
    .when("/jugar", {
        templateUrl : "jugar.html"
    })
    .when("/quienes", {
        templateUrl : "quienes.html"
    })
    // .when("/prueba", {
    //     template: "<h1>PRueba</h1>"
    // });
});
