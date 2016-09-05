'use strict';

describe('Controller: ProjectidxCtrl', function () {

  // load the controller's module
  beforeEach(module('firstAppApp'));

  var ProjectidxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectidxCtrl = $controller('ProjectidxCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have a ProjectidxCtrl Controller', function () {
    expect(ProjectidxCtrl).toBeDefined();
  });
});
