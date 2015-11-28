(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.factory('terminalCommandLog', ["terminalMessageQueue", function(terminalMessageQueue) {

        var log = [];

        return {
            push: push
        };

        function push( command ) {
            log.push(command);
            terminalMessageQueue.push({
                type: 'log',
                message: command
            });
        };

    }]);

})();
