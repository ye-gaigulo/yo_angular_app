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
            var auth = this;
            $scope.errorMessage = '';

            $scope.submit = function() {
                authService.Login($scope.username, $scope.password)
                    .then(function() {
                        // redirect to projects index
                        auth.loggedIn = true;
                        $location.path('/projects');
                    })
                    .catch(function(response) {
                        if (response.non_field_errors) {
                            //set errors
                            auth.loggedIn = false;
                            $scope.errorMessage = response.non_field_errors[0];
                        }
                    });
            };
        }
    ]);
