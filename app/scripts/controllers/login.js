'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
    .controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'authService',
        function($scope, $rootScope, $location, authService) {
          $scope.errorMessage = '';

            $scope.submit = function() {
                authService.Login($scope.username, $scope.password)
                    .then(function() {
                        // redirect to projects index
                        $location.path('/projects');
                    })
                    .catch(function(response) {
                        if (response.non_field_errors) {
                            //set errors
                            $scope.errorMessage = response.non_field_errors[0];
                        }
                    });
            };
        }
    ]);
