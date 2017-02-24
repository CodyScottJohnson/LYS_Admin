'use strict';

/**
 * @ngdoc function
 * @name lysAdminApp.controller:TestimonialCtrl
 * @description
 * # TestimonialCtrl
 * Controller of the lysAdminApp
 */
angular.module('lysAdminApp')
  .controller('TestimonialCtrl', function ($scope,Data, $mdPanel) {
    $scope.Data = Data.data;
    $scope.temp = function(data){
      console.log(data);
    };
    $scope.saveTestimonial = function(testimonial){
      Data.setTestimonial(testimonial).then(function(){Data.getTestimonials();});
      //$mdPanel.close();
    };
    $scope.deleteTestimonial = function(testimonial){
      Data.deleteTestimonial(testimonial).then(function(){Data.getTestimonials();});
      //$mdPanel.close();
    };
    $scope.showDialog = function(testimonial) {
      var position = $mdPanel.newPanelPosition()
        .absolute()
        .center();

  var config = {
    attachTo: angular.element(document.body),
    controller: 'TestimonialCtrl',
    controllerAs: 'ctrl',
    locals:{Testimonial:testimonial},
    disableParentScroll: true,
    templateUrl: 'views/Partials/editTestimonial.html',
    hasBackdrop: true,
    panelClass: 'testimonial_modal',
    position: position,
    trapFocus: true,
    zIndex: 150,
    clickOutsideToClose: true,
    escapeToClose: true,
    focusOnOpen: true
  };
  $mdPanel.open(config);
};

  });
