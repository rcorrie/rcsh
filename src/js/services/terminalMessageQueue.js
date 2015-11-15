(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.factory('terminalMessageQueue', function( eventBus, EVENTS ) {

        var queue = [];

        return {
            push: push,
            getIds: getIds,
            getById: getById
        };

        function push( message ) {
            queue.push( message );
            eventBus.emit( EVENTS.newTerminalMessage, queue.length - 1 )
        };

        function getIds() {
            return _.keys(queue);
        };

        function getById( messageId ) {
            return _.assign( {}, queue[messageId] );
        };

    })

})();
