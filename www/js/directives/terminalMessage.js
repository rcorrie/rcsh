(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.directive('terminalMessage', ["$compile", "terminalMessageQueue", function($compile, terminalMessageQueue) {

        return {
            restrict: 'AE',
            scope: {
                messageId: '='
            },
            link: function ( $scope, $element, $attr ) {

                var packet = terminalMessageQueue.getById($scope.messageId);
                var directive = packet.type + '-message-output';
                var element = angular.element( '<'+directive+'></'+directive+'>' );
                $element.append(element);
                $compile( element )( _.assign($scope, {packet: packet}) );

            },
            template: ''
        };

    }]);

})();
