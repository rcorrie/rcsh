(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.service('terminalCommandDispatcher', function(terminalMessageQueue, terminalCommandLog, terminalCommandFactory) {

        return function( command ) {

            // Log Command
            terminalCommandLog.push(command);

            terminalCommandFactory( command ).then(
                terminalMessageQueue.push
            );

        }

    })

})();
