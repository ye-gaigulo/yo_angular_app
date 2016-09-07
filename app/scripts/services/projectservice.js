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

            var url = PROJECT_SERVICE_BASE_URI + 'projects/';

            projectAPI.CreateProject = function(project) {

                var data = {
                    'project': project
                };

                return httpHelper.create(url, data);
            };

            projectAPI.GetProjects = function() {

                return httpHelper.get(url, data);
            };

            projectAPI.GetProject = function(id) {
                var data = {
                    'id': id
                };

                return httpHelper.get(url, data);
            };

            projectAPI.DeleteProject = function(id) {
                var data = {
                    'id': id
                };

                return httpHelper.delete(url, data);
            };
            projectAPI.UpdateProject = function(project) {
                var data = {
                    'id': project.pk,
                    'project': project
                };

                return httpHelper.update(url, data);
            };
        }
    ]);
