(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.controller('TerminalController', ["$scope", "$window", "$timeout", "eventBus", "terminalMessageQueue", "terminalCommandDispatcher", "EVENTS", function($scope, $window, $timeout, eventBus, terminalMessageQueue, terminalCommandDispatcher, EVENTS) {

        $scope.terminal = {
            messages: getMessages(),
            input: '',
            fns: {
                submitCommand: submitCommand,
                positionWindow: positionWindow
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
            clearInput();
        };

        function clearInput() {
            $scope.terminal.input = '';
        };

        function pushNewMessage( messages ) {
            $scope.terminal.messages = messages;
            positionWindow();
        };

        function positionWindow() {
            $timeout(function() {
                $window.scrollTo(0, document.body.scrollHeight);
            }, 0)
        }


    }])

})();
