'use strict';

/**
 * @ngdoc service
 * @name lysAdminApp.Data
 * @description
 * # Data
 * Service in the lysAdminApp.
 */
angular.module('lysAdminApp')
  .service('Data', function ($http,$q,ENV) {
    var Data = {data:{}};
    Data.getTestimonials = function(){
      var deferred = $q.defer();
      $http({
            method: 'GET',
            url: ENV.API_Public + 'Testimonials'

        }).then(function(data) {
           Data.data.Testimonials = data.data;
            deferred.resolve(data.data);
        }, function(error) {
            deferred.reject(error);
        });
    return deferred.promise;
    }
    Data.getTestimonials();
    return Data;
  });
