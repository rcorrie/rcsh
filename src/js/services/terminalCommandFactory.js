(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.factory('terminalCommandFactory', function( $injector ) {

        return function find( str ) {

            var commandStr = str.split(' ');
            var options = commandStr.splice(1);

            var commandSvc = commandStr + 'Command';
            var command;

            if( $injector.has( commandSvc ) ) 
                command = $injector.get( commandSvc );
            else 
                command = $injector.get( 'notFoundCommand' );

            return command.run( options )

        }

    })

})();
