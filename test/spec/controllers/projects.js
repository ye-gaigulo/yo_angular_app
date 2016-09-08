'use strict';

describe('Controller: ProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('firstAppApp'));

  var ProjectsCtrl,
      $rootScope,
      $scope,
      $controller,
      $httpBackend,
      $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$rootScope_, _$controller_, _$httpBackend_, _$location_) {
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

  it('should have a projects index', function () {

    $httpBackend.whenGET(/^.*/).respond(200, '');
    $rootScope.$digest();

    expect($scope.projects.length).toBe(0);

    ProjectsCtrl.init();
  });

});
