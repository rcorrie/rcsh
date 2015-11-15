(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.service('eventBus', function($rootScope) {

        return {
            listen: onEvent,
            emit: emitEvent
        };

        function onEvent( event, callback ) {
            $rootScope.$on( event, callback );
            console.log('Registered event listener:', event);
        };

        function emitEvent( event, options ) {
            $rootScope.$emit( event, options );
            console.log('Event emitted: ', event, options);
        };

    })

})();
