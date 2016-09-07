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

            var init = function(){
                getProjects();
            };

            var getProjects = function(){
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
                    projectService.DeleteProject(id)
                        .then(function() {
                            init();
                        })
                        .catch(function(response) {
                            console.log(response);
                        });
                }

            };

            init();
        }
    ]);
