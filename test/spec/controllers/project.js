'use strict';

describe('Controller: ProjectCtrl', function() {

    // load the controller's module
    beforeEach(module('firstAppApp'));

    var ProjectCtrl,
        deferred,
        $q,
        $rootScope,
        $scope,
        $controller,
        $httpBackend;

        // Initialize the controller and a mock scope
        beforeEach(inject(function(_$rootScope_, _$controller_, _$httpBackend_, _$q_) {
            $rootScope = _$rootScope_;
            $q = _$q_;
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;

            deferred = _$q_.defer();
        }));

    describe('The edit a function procedure', function() {

        it('should return a project', function() {
            ProjectCtrl = $controller('ProjectCtrl', {
                $scope: $scope,
                $routeParams: {
                    id: 125
                }
            });


            // expect(ProjectCtrl.id).toBe(125);
            // var ProjectService = projectService
            // spyOn(ProjectService, 'GetProject');

        });


        // it('should pass the id for the project', function() {
        //     ProjectCtrl = $controller('ProjectCtrl', {
        //         $scope: $scope,
        //         $routeParams: {
        //             id: 125
        //         }
        //     });
        //
        // });

        it('should return a project', function() {

            $httpBackend.whenGET(/^.*/).respond(200, '');
            $rootScope.$digest();

            ProjectCtrl = $controller('ProjectCtrl', {
                $scope: $scope,
                $routeParams: {
                    id: 125
                }
            });

            //spyOn(ProjectCtrl, "getProject");



            expect($scope.project).toBeDefined();
            expect($scope.project.is_billable).toBe(true);
            expect($scope.project.is_active).toBe(true);

            expect($scope.mode).toBe('Edit');
            expect($scope.formTitle).toBe('Edit Project');

            // $httpBackend.expectGET('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/1/')
            // .respond(mockProject);
            //
            // $httpBackend.flush();
            // ProjectCtrl.getProject(125);

            //expect(ProjectCtrl.getProject).toHaveBeenCalledWith(125);
        });
    });

    describe('The create a project procedure', function() {

        it('should open a form for a new project', function() {
            ProjectCtrl = $controller('ProjectCtrl', {
                $scope: $scope
            });

            expect($scope.mode).toBe('Create');
            expect($scope.formTitle).toBe('Create Project');
        });

        it('should submit a new project', function() {

        });
    });

});
