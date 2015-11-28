(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.config(["$stateProvider", function($stateProvider) {
        $stateProvider
        .state('app', {
            url: '',
            controller: 'AppController',
            template: ' <div id="terminal-wrapper">\
                            <terminal>\
                            </terminal>\
                        </div>\
                        <div id="peripherals">\
                            <menu></menu>\
                            <chat></chat>\
                        </div>'
        })
    }])

})();
