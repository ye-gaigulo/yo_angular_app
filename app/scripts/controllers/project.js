'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
    .controller('ProjectCtrl', ['$scope', '$window', '$location', 'projectService', '$route', '$routeParams', 'httpHelper',
        function($scope, $window, $location, projectService, $route, $routeParams, httpHelper) {

            var id = $routeParams.id;

            $scope.project = {
                is_billable: true,
                is_active: true

            };

            var getProject = function(id) {
                projectService.GetProject(id)
                    .then(function(response) {
                        $scope.project = response.data;
                        $scope.project.start_date = httpHelper.stringToDate($scope.project.start_date);
                        if (angular.isDefined($scope.project.end_date)) {
                            $scope.project.end_date = httpHelper.stringToDate($scope.project.end_date);
                        }
                    })
                    .catch(function(response) {
                        console.log(response);
                    });
            };

            if (id) {
                //edit
                $scope.mode = 'Edit';
                $scope.formTitle = 'Edit Project';
               //Get the project to Edit
                getProject(id);

            } else {
                //create
                $scope.mode = 'Create';
                $scope.formTitle = 'Create Project';
            }

            $scope.submit = function() {
                var project = $scope.project;
                if ($scope.mode === 'Edit') {

                    project.start_date = httpHelper.dateToString(project.start_date);
                    project.end_date = httpHelper.dateToString(project.end_date);

                    projectService.UpdateProject(project)
                        .then(function() {
                            $location.path('/projects');
                        })
                        .catch(function(response) {
                            console.log(response);
                        });
                } else {

                    project.start_date = httpHelper.dateToString(project.start_date);
                    project.end_date = httpHelper.dateToString(project.end_date);

                    projectService.CreateProject(project)
                        .then(function() {
                            $location.path('/projects');
                        })
                        .catch(function(response) {
                            console.log(response);
                        });
                }
            };
        }
    ]);
