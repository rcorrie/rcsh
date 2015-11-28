(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.directive('logMessageOutput', function() {
    
        return {
            restrict: 'AE',
            link: function( $scope ){
                debugger;
            },
            template: '<span class="terminal-message user"><strong ng-hide="packet.type==\'result\'">gu3st$ </strong><span ng-bind-html="packet.message"></span></span>'
        }
    
    })

})();
