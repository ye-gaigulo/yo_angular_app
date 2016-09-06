'use strict';

/**
 * @ngdoc service
 * @name firstAppApp.httpHelper
 * @description
 * # httpHelper
 * Service in the firstAppApp.
 */
angular.module('firstAppApp')
  .service('httpHelper', 
  	['$http', '$location', 'authService',
  	function ($http, $location, authService) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      var httpHelper = {};
      var headers = {
      					'Content-Type': 'applicatoin/json',
      					'Authorization': authService.getToken()	
      				};

      	httpHelper.get = function (url, data) {
      	if(angular.isDefined(data.id)){
      		var id = data.id;
      		url += id +'/';
      	}
      	return $http({
      		method: 'GET',
      		url: url,
      		headers: headers
      	});
      };

      httpHelper.create = function (url, data) {
      	return $http({
      		method: 'POST',
      		url: url,
      		data: data,
      		headers: headers
      	});
      };				

      httpHelper.delete = function(url, id) {
      	if(angular.isDefined(id)){
      		url += id + '/';
      	}
      	return $http({
      		method: 'DELETE',
      		url: url,
      		headers: headers
      	});	
      };
      
      return httpHelper;

    }]);
