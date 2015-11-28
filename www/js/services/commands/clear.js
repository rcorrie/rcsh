(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.service('clearCommand', ["$q", "terminalMessageQueue", function( $q, terminalMessageQueue ) {

        return {
            run: run
        };

        function run( options ) {
            var deferred = $q.defer();

            deferred.resolve(null);

            terminalMessageQueue.clear();

            return deferred.promise;
        }

    }])

})();
