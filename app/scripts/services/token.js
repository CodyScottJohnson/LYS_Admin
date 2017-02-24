'use strict';

/**
 * @ngdoc service
 * @name lysAdminApp.Token
 * @description
 * # Token
 * Service in the lysAdminApp.
 */
angular.module('lysAdminApp')
  .service('Token', function ($http,$q,ENV, $rootScope,localStorageService) {
    var Token = {};
    Token.refreshToken = function(){
      var deferred = $q.defer();
      $http({
            method: 'POST',
            url: ENV.API_Private + 'Token/',
            data:{
              grant_type:'refresh_token',
              refresh_token:$rootScope.User.Token.refresh_token,
              client_id: ENV.client_id,
              client_secret: ENV.client_secret
            }

        }).then(function(data) {
          var Token = data.data;
              $rootScope.User ={};
              $rootScope.User.Token = data.data;
              $rootScope.User.Token.TimeStamp = moment().format();
              localStorageService.cookie.set('user', $rootScope.User,1);
            deferred.resolve(data.data);
        }, function(error) {
            deferred.reject(error);
        });
    return deferred.promise;
  };
    return Token;
  });
