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
  	['$http', '$location', '$filter', 'authService',
  	function ($http, $location, $filter, authService) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      var httpHelper = {};
      var headers = {
      					'Content-Type': 'application/json',
      					'Authorization': authService.getToken()
      				};

      	httpHelper.get = function (url, data) {
      	if(angular.isDefined(data.pk)){
      		var id = data.pk;
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
      		data: data.model,
      		headers: headers
      	});
      };

      httpHelper.delete = function(url, data) {
      	if(angular.isDefined(data.pk)){
      		var id = data.pk;
      		url += id + '/';
      	}
      	return $http({
      		method: 'DELETE',
      		url: url,
      		headers: headers
      	});
      };

      httpHelper.update = function (url, data) {
      //    (angular.isDefined(data.pk)) && url += data.pk +'/';
      	if(angular.isDefined(data.pk)){
      		var id = data.pk;
      		url += id + '/';
      	}

       return $http({
      	 	method: 'PUT',
      	 	url: url,
      	 	data: data.model,
      	 	headers: headers
      	});

      };

      httpHelper.dateToString = function (dateDate) {
      	var date = $filter('date')(dateDate, 'yyyy-MM-dd');

      	return date;
      }

      httpHelper.stringToDate = function (stringDate) {
      	var date = new Date(stringDate);

      	return date;
      }

      return httpHelper;

    }]);
