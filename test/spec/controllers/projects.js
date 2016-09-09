'use strict';

describe('Controller: ProjectsCtrl', function() {

    // load the controller's module
    beforeEach(module('firstAppApp'));

    var ProjectsCtrl,
        deffered,
        $q,
        $rootScope,
        $scope,
        $controller,
        $httpBackend,
        $location,
        mockProject = {
                        'pk': 125,
                        'Title': 'Test Title',
                        'Description': 'This is a test description',
                        'start_date': '2016-10-25',
                        'end_date': '2016-11-11',
                        'is_active': true,
                        'is_billable': true
                     };

    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$rootScope_, _$controller_, _$httpBackend_, _$location_, _$q_, projectService) {
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $location = _$location_;

        ProjectsCtrl = $controller('ProjectsCtrl', {
            $scope: $scope
                  // place here mocked dependencies
        });

    }));

    it('should have a projects index', function() {

        $httpBackend.whenGET(/^.*/).respond(200, '');

        expect($scope.projects.length).toBe(0);

        ProjectsCtrl.init();
    });

    it('should change the url', function() {
        $scope.editProject(mockProject.pk);
        //expect($location.url).toBe('/project/125');
    });

    it('should delete a project', inject(function(projectService) {

        spyOn(projectService, 'DeleteProject');
        $scope.deleteProject(mockProject.pk);

        // expect(response.status).toBe(204);
    }));

});
