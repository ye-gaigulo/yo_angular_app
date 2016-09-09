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

            var project = this,
                projectObject = {
                    'pk': '',
                    'model': {}
                };

            projectObject.pk = $routeParams.id;

            $scope.project = {
                is_billable: true,
                is_active: true

            };

            project.getProject = function(data) {
                projectService.GetProject(data)
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

            if (projectObject.pk) {
                //edit
                $scope.mode = 'Edit';
                $scope.formTitle = 'Edit Project';
                //Get the project to Edit
                project.getProject(projectObject);

            } else {
                //create
                $scope.mode = 'Create';
                $scope.formTitle = 'Create Project';
            }

            $scope.submit = function() {
                projectObject.model = $scope.project;

                projectObject.model.start_date = httpHelper.dateToString(projectObject.model.start_date);
                if (projectObject.model.end_date) {
                    projectObject.model.end_date = httpHelper.dateToString(projectObject.model.end_date);
                }

                // console.log(projectObject);
                // debugger;

                if ($scope.mode === 'Edit') {

                    projectService.UpdateProject(projectObject)
                        .then(function() {
                            // manage page state
                            project.success = true;
                        })
                        .catch(function(response) {
                            console.log(response);
                        });
                } else {
                    projectService.CreateProject(projectObject)
                        .then(function() {
                            // manage page state
                            project.success = true;
                        })
                        .catch(function(response) {
                            console.log(response);
                        });
                }

                //check that the pass variables are set and change page location.
                $location.path('/projects');
          };
        }
    ]);
