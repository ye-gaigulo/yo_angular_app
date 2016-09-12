'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:projectForm
 * @description
 * # projectForm
 */
angular.module('firstAppApp')
  .directive('projectForm', function () {
    return {
      templateUrl: '/views/directives/projectForm.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
