'use strict';

/**
 * @ngdoc service
 * @name firstAppApp.authService
 * @description
 * # authService
 * Service in the firstAppApp.
 */
angular.module('firstAppApp')
  .service('authService', 
  	['$http', '$cookieStore', '$rootScope', 
  	function ($http, $cookieStore, $rootScope) {
        // AngularJS will instantiate a singleton by calling "new" on this function
		var service = {};

		service.Login = function(username, password, callback) {
		/*
			$timeout(function() {
				var response = { success: username === 'test' && password === 'test'};
				if(!response.success){
					response.message = "Username or password is incorrect";
				}
				callback(response);
			}, 1000);
		*/
			var data = { 'username' : username, 'password' : password};

			$http.post('http://userservice.staging.tangentmicroservices.com/api-token-auth/', data)
			.success(function(response) {
				callback(response);
			})
			.error(function(response) {
				callback(response);
			});
	
		};	

		return service;	      
      
    }]);
