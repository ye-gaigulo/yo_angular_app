
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
  $httpBackend,
  mockProject = {
    'pk': 125,
    'Title': 'Test Title',
    'Description': 'This is a test description',
    'start_date': '2016-10-25',
    'end_date': '2016-11-11',
    'is_active': true,
    'is_billable': true
  },
  projectObject = {
    'pk': undefined,
    'model': {}
  };
  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$rootScope_, _$controller_, _$httpBackend_, _$q_) {
    $rootScope = _$rootScope_;
    $q = _$q_;
    $scope = _$rootScope_.$new();
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;

    deferred = _$q_.defer();
  }));

  describe('Edit a project', function() {

    it('should return pass a project Primary Key', function() {
      ProjectCtrl = $controller('ProjectCtrl', {
        $scope: $scope,
        $routeParams: {
          id: 125
        }
      });


      // spyOn(ProjectService, 'GetProject');
    });

    it('should open form with project to be edited', function() {

      $httpBackend.whenGET(/^.*/).respond(200, '');
      $rootScope.$digest();

      ProjectCtrl = $controller('ProjectCtrl', {
        $scope: $scope,
        $routeParams: {
          id: 125
        }
      });

      spyOn(ProjectCtrl, 'getProject');

      $httpBackend.expectPOST('http://userservice.staging.tangentmicroservices.com/api-token-auth/').respond({
          'token': '71456dbd15de0c0b6d2b4b44e5a92ad94c6def97'
      });

      expect($scope.mode).toBe('Edit');
      expect($scope.formTitle).toBe('Edit Project');

      ProjectCtrl.getProject(mockProject.pk);

      expect(ProjectCtrl.getProject).toHaveBeenCalledWith(mockProject.pk);
    });

    it('should update the current project values', function() {
      ProjectCtrl = $controller('ProjectCtrl', {
        $scope: $scope,
        $routeParams: {
          id: 125
        }
      });

       //spyOn(ProjectCtrl, 'updateProject');
      //
       projectObject.model = mockProject;
       $scope.project = mockProject;
       $scope.submit();
      //
      // expect(ProjectCtrl.updateProject).toHaveBeenCalledWith(projectObject);

        });
    });

    describe('Create a project', function() {


        it('should open a form for a new project', function() {
            ProjectCtrl = $controller('ProjectCtrl', {
                $scope: $scope
            });

            expect($scope.mode).toBe('Create');
            expect($scope.formTitle).toBe('Create Project');
        });

        it('should submit and save a new project', function() {
          ProjectCtrl = $controller('ProjectCtrl', {
              $scope: $scope
          });

          spyOn(ProjectCtrl, 'createProject');
          // $httpBackend.expectPOST('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/')
          // .respond();

// console.log($scope.project);

          projectObject.model = mockProject;
          $scope.project = mockProject;
          $scope.submit();


      //    expect(ProjectCtrl.createProject).toHaveBeenCalledWith(projectObject);

        });
    });

});
