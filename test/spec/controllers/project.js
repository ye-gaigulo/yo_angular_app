'use strict';

describe('Controller: ProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('firstAppApp'));

  var ProjectCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectCtrl = $controller('ProjectCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have a ProjectCtrl Controller', function () {
    expect(ProjectCtrl).toBeDefined();
  });
});
