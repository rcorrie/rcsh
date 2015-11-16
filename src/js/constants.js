(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.constant('EVENTS', mirrorkey({

        newTerminalMessage: null

    }));

    App.constant('ACTIONS', mirrorkey({

        terminal: {
            clear: null
        }

    }))

})();
