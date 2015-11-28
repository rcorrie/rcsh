(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.directive('systemMessageOutput', function() {
    
        return {
            restrict: 'AE',
            link: function( $scope ){
                debugger;
            },
            template: '<span class="terminal-message"><strong ng-hide="packet.type==\'result\'">rcsh: </strong><span ng-bind-html="packet.message"></span></span>'
        }
    
    })

})();
