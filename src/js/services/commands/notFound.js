(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.service('notFoundCommand', function( $q ) {

        return {
            run: run
        };

        function run( options ) {
            var deferred = $q.defer();

            var message = buildMessage( options[0] );

            deferred.resolve({
                type: 'system',
                message: message
            });

            return deferred.promise;

            function buildMessage( command ) {
                var bottledMessages = {
                    git: '`git` package not found. Install it with `brew install git`.',
                    brew: 'unsufficient privileges, run as root.',
                    sudo: 'you are in a sandbox environment, `sudo` commands are not allowed.'
                };

                var message = bottledMessages[ command ];
                if( message ) return message;
                else return 'command not found: '+command;
            }
        }

    })

})();
