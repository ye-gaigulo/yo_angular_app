'use strict';

describe('Controller: ProjectCtrl', function() {

    // load the controller's module
    beforeEach(module('firstAppApp'));

    var ProjectCtrl,
        $rootScope,
        $scope,
        $controller,
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$rootScope_, _$controller_, _$httpBackend_) {
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
    }));

    it('should store the id for the project', function() {
        ProjectCtrl = $controller('ProjectCtrl', {
            $scope: $scope,
            $routeParams: {
                            id: 125
                          }
        });
        expect(ProjectCtrl.id).toBe(125);
    });

    it('should return a project', function() {
        ProjectCtrl = $controller('ProjectCtrl', {
            $scope: $scope,
            $routeParams: {
                            id: 126
                          }
        });

        expect($scope.project.is_billable).toBe(true);
        expect($scope.project.is_active).toBe(true);

        expect($scope.mode).toBe('Edit');
        expect($scope.formTitle).toBe('Edit Project');


    });
});
