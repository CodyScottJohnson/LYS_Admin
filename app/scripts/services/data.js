'use strict';

/**
 * @ngdoc service
 * @name lysAdminApp.Data
 * @description
 * # Data
 * Service in the lysAdminApp.
 */
angular.module('lysAdminApp')
  .service('Data', function ($rootScope, $http,$q,ENV) {
    var Data = {data:{}};
    Data.getTestimonials = function(){
      var deferred = $q.defer();
      $http({
            method: 'GET',
            url: ENV.API_Private + 'Testimonials',
            params:{
              access_token:$rootScope.User.Token.access_token,
              client_id: ENV.client_id,
              client_secret: ENV.client_secret
            }

        }).then(function(data) {
           Data.data.Testimonials = data.data;
            deferred.resolve(data.data);
        }, function(error) {
            deferred.reject(error);
        });
    return deferred.promise;
  };
  Data.setTestimonial = function(testimonial){
    var deferred = $q.defer();
    $http({
          method: 'POST',
          url: ENV.API_Private + 'Testimonials',
          params:{
            access_token:$rootScope.User.Token.access_token,
            client_id: ENV.client_id,
            client_secret: ENV.client_secret
          },
          data:testimonial

      }).then(function(data) {

          deferred.resolve(data.data);
      }, function(error) {
          deferred.reject(error);
      });
  return deferred.promise;
};
Data.deleteTestimonial = function(testimonial){
  var deferred = $q.defer();
  $http({
        method: 'DELETE',
        url: ENV.API_Private + 'Testimonials/'+testimonial.Testimonial_ID,
        params:{
          access_token:$rootScope.User.Token.access_token,
          client_id: ENV.client_id,
          client_secret: ENV.client_secret
        }

    }).then(function(data) {
       Data.getTestimonials();
        deferred.resolve(data.data);
    }, function(error) {
        deferred.reject(error);
    });
return deferred.promise;
};
    Data.getTestimonials();
    return Data;
  });
