'use strict';

/**
 * @ngdoc function
 * @name lysAdminApp.controller:TestimonialCtrl
 * @description
 * # TestimonialCtrl
 * Controller of the lysAdminApp
 */
angular.module('lysAdminApp')
  .controller('TestimonialCtrl', function ($scope,Data) {
    $scope.Data = Data.data;
  });
