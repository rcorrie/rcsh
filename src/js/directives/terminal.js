(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.directive('terminal', function() {

        return {
            restrict: 'AE',
            controller: 'TerminalController',
            template: ' <div ng-repeat="messageId in terminal.messages">\
                            <terminal-message message-id="messageId"></terminal-message><br>\
                        </div>\
                        <form ng-submit="terminal.fns.submitCommand( terminal.input )">\
                            <input type="text" ng-model="terminal.input" />\
                        </form>'
        }

    })

})();
