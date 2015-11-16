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
                        <div id="terminal-input-container" class="terminal-message user"><strong>gu3st$</strong> {{terminal.input}}<span class="cursor"></span></div>\
                        <form id="terminal-input-form" ng-submit="terminal.fns.submitCommand( terminal.input )">\
                            <input type="text" ng-model="terminal.input" autofocus />\
                        </form>'
        }

    })

})();
