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
  	['$http', '$cookies', '$q', 'AUTH_SERVICE_BASE_URI',	
  	function ( $http, $cookies, $q, AUTH_SERVICE_BASE_URI) {
        // AngularJS will instantiate a singleton by calling "new" on this function
		var apiService = this;

		apiService.Login = function(username, password) {
				
			var deferred = $q.defer();
			var url = AUTH_SERVICE_BASE_URI + 'api-token-auth/';
			
			var data = {'username' : username, 'password' : password};

			$http.post(url, data)
			.success(function(response, status, headers, config) {
				if(response.token){
					apiService.setToken(response.token);
				}
				deferred.resolve(response, status, headers, config);
			}).error(function(response, status, headers, config) {
				deferred.reject(response, status, headers, config);
			});
			return deferred.promise;
		};

		apiService.logout = function(){
            $cookies.remove('token');
        };

        apiService.setToken = function (token) {
            $cookies.put('token', token);
        };

        apiService.getToken = function () {
            return $cookies.get('token');

};
    }]);

