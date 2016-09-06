'use strict';

/**
 * @ngdoc overview
 * @name firstAppApp
 * @description
 * # firstAppApp
 *
 * Main module of the application.
 */
angular
  .module('firstAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('AUTH_SERVICE_BASE_URI', 'http://userservice.staging.tangentmicroservices.com/')
  .constant('PROJECT_SERVICE_BASE_URI', 'http://projectservice.staging.tangentmicroservices.com/api/v1/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/projectIdx', {
        templateUrl: 'views/projectidx.html',
        controller: 'ProjectidxCtrl',
        controllerAs: 'projectIdx'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

