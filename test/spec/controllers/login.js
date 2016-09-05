'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('firstAppApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have a LoginCtrl Controller', function () {
    expect(LoginCtrl).toBeDefined();
  });
});
