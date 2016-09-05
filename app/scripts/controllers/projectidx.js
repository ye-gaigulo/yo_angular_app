'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:ProjectidxCtrl
 * @description
 * # ProjectidxCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
  .controller('ProjectidxCtrl', 
  	['$scope', '$cookies', 'Base64',  
  	function ($scope, $cookies, Base64) {
  		console.log(Base64.decode($cookies.get('authToken')));	    
    }]);
