(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.service('notFoundCommand', function( $q ) {

        return {
            run: run
        };

        function run( options ) {
            var deferred = $q.defer();

            deferred.resolve({
                type: 'system',
                message: 'Command not found'
            });

            return deferred.promise;
        }

    })

})();
