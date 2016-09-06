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
  	['$scope', '$window', '$location', 'projectResource',     
  	function ($scope, $window, $location, projectResource) {

  		projectResource.GetProjects()
  		.then(function(response) {
 			$scope.projects = response.data;
  		})
  		.catch(function(response) {
  			console.log(response.data);
  		});

  		$scope.submit = function() {
			// projectResource.CreateProject(projectObject)
  	// 		.then(function(response) {
  	// 			console.log('pass');
  	// 		})
  	// 		.catch(function(response) {
  	// 			console.log('fail');
  	// 		});
  		}; 
  		 
  		 
  		$scope.deleteProject = function(id) {

  			var deleteProject = $window.confirm('Are you sure you want to delete?');

  			if(deleteProject) {
  				projectResource.DeleteProject(id)
  				.then(function(response) {
  					//console.dir(response);
  					console.log(response.status);	
  				})
  				.catch(function(response) {
  					console.log('There was an error: ' + response.data);					
  				});	
  			}
			
		};
//		console.dir(projectResource.someMethod);
//  	console.log(Base64.decode($cookies.get('authToken')));	  
	}]);

