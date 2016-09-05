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
  	['Base64', '$http', '$cookies', '$rootScope', 
  	function (Base64, $http, $cookies, $rootScope) {
        // AngularJS will instantiate a singleton by calling "new" on this function
		var service = {};

		service.Login = function(username, password, callback) {
		//	Base64.miracle(username,password);
		
			var data = {'username' : username, 'password' : password};

			$http.post('http://userservice.staging.tangentmicroservices.com/api-token-auth/', data)
			.then(function(response) {
				// console.log('Successful http post');
				// console.dir(response.status);
				service.SetCredentials(username, response.data.token);
				callback(response);
			}, function(response) {
				response.error_msg = "An error has occured";
				callback(response);
			});
	
		};

		service.SetCredentials = function(username, authToken) {
			var authData = Base64.encode(authToken);
			// console.log('Setting the authentication token');
			$cookies.put('authToken', authData);
		};	

		return service;	      
      
    }]);

