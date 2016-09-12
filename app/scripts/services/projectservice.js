'use strict';

/**
 * @ngdoc service
 * @name firstAppApp.projectResource
 * @description
 * # projectResource
 * Service in the firstAppApp.
 */
angular.module('firstAppApp')
    .service('projectService', ['$http', '$rootScope', '$cookies', '$q', 'PROJECT_SERVICE_BASE_URI', 'httpHelper',
        function($http, $rootScope, $cookies, $q, PROJECT_SERVICE_BASE_URI, httpHelper) {
            // AngularJS will instantiate a singleton by calling "new" on this function
            var projectAPI = this;
            var data = {};
            var concatUrl;
            var url = PROJECT_SERVICE_BASE_URI + 'projects/';

            projectAPI.CreateProject = function(data) {
                return httpHelper.create(url, data);
            };
            projectAPI.GetProjects = function() {
                return httpHelper.get(url, data);
            };
            projectAPI.GetProject = function(data) {
                return httpHelper.get(url, data);
            };
            projectAPI.DeleteProject = function(data) {
                return httpHelper.delete(url, data);
            };
            projectAPI.UpdateProject = function(data) {
                return httpHelper.update(url, data);
            };
        }
    ]);
