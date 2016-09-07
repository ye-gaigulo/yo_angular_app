'use strict';

describe('Controller: ProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('firstAppApp'));

  var ProjectsCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsCtrl = $controller('ProjectsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have a ProjectsCtrl Controller', function () {
    expect(ProjectsCtrl).toBeDefined();
  });
});









 // EditprojectCtrl = $controller('EditprojectCtrl', {
 //      $scope: scope
 //      // place here mocked dependencies
 //    });

 //    CreateprojectCtrl = $controller('CreateprojectCtrl', {
 //      $scope: scope
 //      // place here mocked dependencies
 //    });


 //     it('should have a EditprojectCtrl Controller', function () {
 //    expect(EditprojectCtrl).toBeDefined();
 //  });

 //  it('should have a CreateprojectCtrl Controller', function () {
 //    expect(CreateprojectCtrl).toBeDefined();
 //  });
