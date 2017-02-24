'use strict';

/**
 * @ngdoc function
 * @name lysAdminApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the lysAdminApp
 */
angular.module('lysAdminApp')
  .controller('LoginCtrl', function ($scope, $http,$rootScope,$state,localStorageService,ENV) {
    $scope.login = function(username, password) {
    $http({
      method: 'POST',
      url: ENV.API_Private+'Token/',
      data: {
        grant_type: 'password',
        client_id: ENV.client_id,
        client_secret: ENV.client_secret,
        username: username,
        password: password
      }
    }).then(function(data) {
      // Store your data or what ever....
      // Then resolve
      var Token = data.data;
          $rootScope.User ={};
          $rootScope.User.Token = data.data;
          $rootScope.User.Token.TimeStamp = moment().format();
          localStorageService.cookie.set('user', $rootScope.User,1);
          $state.go('app.Main');

    }, function(error) {
      console.log(error);
      //Functions.Toast('error','Invalid Username or Password');
    });
  };
  });
