(function() {

    'use strict';

    var App = angular.module('Rcorrie');

    App.service('catCommand', ["$q", "filesSvc", function($q, filesSvc) {
    
        return {
            run: function(options) {

                var deferred = $q.defer();
            
                var file = options[0];

                var message;

                if( filesSvc.has( file ) ) {
                    message = filesSvc.get( file );
                } else {
                    message = '`'+file+'` does not exist.';
                }

                deferred.resolve({
                    type: 'file',
                    message: message
                });

                return deferred.promise;
            
            }
        }
    
    }])

})();
