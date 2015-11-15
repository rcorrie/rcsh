(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.config(function($stateProvider) {
        $stateProvider
        .state('app', {
            url: '',
            controller: 'AppController',
            template: ' <div id="app-wrapper">\
                            <terminal>\
                            </terminal>\
                        </div>'
        })
    })

})();
