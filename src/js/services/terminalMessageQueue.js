(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.factory('terminalMessageQueue', function( eventBus, EVENTS ) {

        var queue = [];

        return {
            push: push,
            getIds: getIds,
            getById: getById,
            clear: clear
        };

        function push( message ) {
            if( !message ) return;
            queue.push( message );
            eventBus.emit( EVENTS.newTerminalMessage, getIds() )
        };

        function getIds() {
            return _.keys(queue);
        };

        function getById( messageId ) {
            return _.assign( {}, queue[messageId] );
        };

        function clear() {
            queue = [];
            eventBus.emit( EVENTS.newTerminalMessage, getIds() )
        };

    })

})();
