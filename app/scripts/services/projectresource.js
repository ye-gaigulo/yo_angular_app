'use strict';

/**
 * @ngdoc service
 * @name firstAppApp.projectResource
 * @description
 * # projectResource
 * Service in the firstAppApp.
 */
angular.module('firstAppApp')
  .service('projectResource', 
    ['$http', '$rootScope', '$cookies', '$q', 'PROJECT_SERVICE_BASE_URI', 'httpHelper', 'authService', 
    function ($http, $rootScope, $cookies, $q, PROJECT_SERVICE_BASE_URI, httpHelper, authService) {
        // AngularJS will instantiate a singleton by calling "new" on this function
      var projectAPI = this;
      var data = {};
      var url = PROJECT_SERVICE_BASE_URI + 'projects/';

      projectAPI.CreateProject = function(data) {
        return httpHelper.create(url, data);
      };

      projectAPI.GetProjects = function() {
        return httpHelper.get(url, data);          
      };

      projectAPI.DeleteProject = function(id){
        return httpHelper.delete(url, id);
      };
     
    }
]);
