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
	  		$scope.dataLoading = true;
	  		authService.Login($scope.username, $scope.password, function(response){
	  			if(response.status === 200){
	  				$location.path('/projectIdx');
	  			}else{
	  				$scope.error = response.error_msg;
	  				$scope.dataLoading = false;
	  			}
	  		});
	  	};
    }]);
