'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
  .controller('LoginCtrl',
  	['$scope', '$rootScope', '$location', 'authService',
  	function ($scope, $rootScope, $location, authService) {

  		$scope.submit = function() {
  			authService.Login($scope.username, $scope.password)
  			.then(function () {
				$location.path('/projects');
			})
			.catch(function (response) {
				if (response.non_field_errors) {
				//set errors
				}
			});
	  	};
    }]);
