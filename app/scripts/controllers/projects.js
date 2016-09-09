'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:ProjectidxCtrl
 * @description
 * # ProjectidxCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
    .controller('ProjectsCtrl', ['$scope', '$window', '$location', 'projectService',
        function($scope, $window, $location, projectService) {

            var projects = this,
                projectObject = {
                    'pk': '',
                    'model': {}
                };

            projects.init = function() {
                $scope.projects = [];
                projects.getProjects();
            };

            projects.getProjects = function() {
                projectService.GetProjects()
                    .then(function(response) {
                        $scope.projects = response.data;
                    })
                    .catch(function(response) {
                        console.log(response.data);
                    });
            };

            $scope.editProject = function(id) {
                $location.path('/project/' + id);
            };

            $scope.deleteProject = function(id) {

                var deleteProject = $window.confirm('Are you sure you want to delete?');

                if (deleteProject) {
                    projectObject.pk = id;
                    projectService.DeleteProject(projectObject)
                        .then(function() {
                            projects.init();
                        })
                        .catch(function(response) {
                            console.log(response);
                        });
                }
            };

            projects.init();
        }
    ]);
