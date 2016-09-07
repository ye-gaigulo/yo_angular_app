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
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/project/:id', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'editProject'
      })
      .when('/createProject', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'createProject'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
