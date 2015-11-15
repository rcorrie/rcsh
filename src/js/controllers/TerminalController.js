(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.controller('TerminalController', function($scope, eventBus, terminalMessageQueue, terminalCommandDispatcher, EVENTS) {

        $scope.terminal = {
            messages: getMessages(),
            input: '',
            fns: {
                submitCommand: submitCommand
            }
        };

        eventBus.listen( EVENTS.newTerminalMessage, listenForNewMesages );

        function getMessages() {
            return terminalMessageQueue.getIds();
        };

        function listenForNewMesages( e, messageId ) {
            pushNewMessage( messageId );
        };

        function submitCommand( command ) {
            terminalCommandDispatcher(command);
        };

        function pushNewMessage( message ) {
            $scope.terminal.messages.push( message );
        }


    })

})();
