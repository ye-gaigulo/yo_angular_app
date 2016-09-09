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

            var project = this;
            project.id = $routeParams.id;

            $scope.project = {
                is_billable: true,
                is_active: true

            };

            projectService.GetProject(project.id)
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


            if (project.id) {
                //edit
                $scope.mode = 'Edit';
                $scope.formTitle = 'Edit Project';
                //Get the project to Edit
                projectService.GetProject(project.id);

            } else {
                //create
                $scope.mode = 'Create';
                $scope.formTitle = 'Create Project';
            }

            $scope.submit = function() {
                var project = $scope.project;

                console.log('check 1 2 check');
                project.start_date = httpHelper.dateToString(project.start_date);
                if (project.end_date) {
                    project.end_date = httpHelper.dateToString(project.end_date);
                }


                if ($scope.mode === 'Edit') {

                    projectService.UpdateProject(project)
                        .then(function() {
                            $location.path('/projects');
                        })
                        .catch(function(response) {
                            console.log(response);
                        });
                } else {

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
