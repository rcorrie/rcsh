(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.service('terminalCommandDispatcher', ["terminalMessageQueue", "terminalCommandLog", "terminalCommandFactory", function(terminalMessageQueue, terminalCommandLog, terminalCommandFactory) {

        return function( command ) {

            // Log Command
            terminalCommandLog.push(command);

            terminalCommandFactory( command ).then(
                terminalMessageQueue.push
            );

        }

    }])

})();
