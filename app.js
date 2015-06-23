(function(){
    var app = angular.module('pokedex',[
        'pokedex.controllers',
        'pokedex.services',
        'ui.bootstrap',
        'ui.router'
    ]);

    app.config(RouterConfiguration);

    RouterConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouterConfiguration($stateProvider, $urlRouterProvider){
         $stateProvider.state('pokemons', {
            url: "/pokemons",
            templateUrl: "templates/pokemons.html",
            controller: 'PokemonsController'
        });

         $urlRouterProvider.otherwise("/pokemons");
    }

})();