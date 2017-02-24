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
    'config',
    'LocalStorageModule',
    'ngAnimate',
    'ngCookies',
    'ngMaterial',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .run(function($rootScope, $state, localStorageService,Token) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;
      if (typeof $rootScope.User === 'undefined') {
        $rootScope.User = localStorageService.cookie.get('user');
      }
      if (requireLogin && typeof $rootScope.User === 'undefined') {
        event.preventDefault();
        $state.go('login');
      }
      else if (toState.name !='login' && toState.name !== '' && ($rootScope.User === null))
      {
        event.preventDefault();
        $state.go('login');
      }
      else if(requireLogin && moment($rootScope.User.Token.TimeStamp).add($rootScope.User.Token.expires_in,'s') < moment()){
        event.preventDefault();
        Token.refreshToken().then(function(){$state.go('app.Main');},function(){$state.go('login');});
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/Shared/login.html',
        controller: 'LoginCtrl',
        data: {
          requireLogin: false
        }

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
      .state('app.Testimonial', {
        url: '/testimonial',
        templateUrl: 'views/Pages/testimonial.html',
        controller: 'TestimonialCtrl',

      }).state('app.Packages', {
        url: '/packages',
        templateUrl: 'views/Pages/packages.html',
        controller: 'TestimonialCtrl',

      });

  });
