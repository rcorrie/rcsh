(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.service('filesSvc', ["$injector", function( $injector ) {
    
        return {
            has: has,
            get: get
        };

        function has( file ) {
            return $injector.has(file+'File');
        };

        function get( file ) {
            return $injector.get(file+'File');
        };
    
    }])

})();
