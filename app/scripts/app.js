'use strict';

/**
 * @ngdoc overview
 * @name lysAdminApp
 * @description
 * # lysAdminApp
 *
 * Main module of the application.
 */
angular
  .module('lysAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .run(function() {

  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/Shared/login.html',
        controller: 'MainCtrl',

      })
      .state('app', {
        url: '',
        abstract: true,
        templateUrl: 'views/app.html',
        controller: 'MainCtrl',
        data: {
          requireLogin: true
        }
      })
      .state('app.Main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',

      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',

      });

  });
