(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.directive('terminalMessage', function() {

        return {
            restrict: 'AE',
            scope: {
                messageId: '='
            },
            controller: function( $scope, terminalMessageQueue ) {
                $scope.message = terminalMessageQueue.getById($scope.messageId);
            },
            template: '<div><strong>{{message.type}}$ </strong> {{message.message}}</div>'
        };

    });

})();
