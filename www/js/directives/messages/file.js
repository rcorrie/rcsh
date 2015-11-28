(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.directive('fileMessageOutput', ["$sce", function( $sce ) {
    
        return {
            restrict: 'AE',
            link: function( $scope ){
                $scope.trustHtml = function(str) {
                    return $sce.trustAsHtml(str);
                }
            },
            template: '<span class="terminal-message"><span ng-bind-html="trustHtml(packet.message)"></span></span>'
        }
    
    }])

})();
