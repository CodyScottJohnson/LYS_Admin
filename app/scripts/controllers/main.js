'use strict';

/**
 * @ngdoc function
 * @name lysAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lysAdminApp
 */
angular.module('lysAdminApp')
  .controller('MainCtrl', function ($scope, $mdSidenav) {
    $scope.toggleNav =function(navID){
      $mdSidenav(navID)
         .toggle()
         .then(function () {
         });
     };

  });
