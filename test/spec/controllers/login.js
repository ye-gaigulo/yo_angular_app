'use strict';

describe('Controller: LoginCtrl', function() {

    // load the controller's module
    beforeEach(module('firstAppApp'));

    var LoginCtrl,
        $scope,
        $controller,
        $httpBackend,
        $location;

    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$rootScope_, _$controller_, _$httpBackend_, _$location_) {
        $scope = _$rootScope_.$new();
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $location = _$location_;

        LoginCtrl = $controller('LoginCtrl', {
            $scope: $scope
                // place here mocked dependencies
        });

        $httpBackend.whenGET(/.*/).respond(200, '');
    }));

    it('should successfully log in', function() {

        $httpBackend.expectPOST('http://userservice.staging.tangentmicroservices.com/api-token-auth/').respond({
            'token': '71456dbd15de0c0b6d2b4b44e5a92ad94c6def97'
        });

        $scope.username = angular.copy('admin');
        $scope.password = angular.copy('admin');

        $scope.submit();

        $httpBackend.flush();

        expect(LoginCtrl.loggedIn).toBe(true);
        expect($location.url()).toBe('/projects');
    });

    it('should display error messages if login fails ', function () {
      $httpBackend.expectPOST('http://userservice.staging.tangentmicroservices.com/api-token-auth/').respond(500, {
            'non_field_errors': [
                'Unable to login with provided credentials.'
            ]
      });

      $scope.username = angular.copy('admin');
      $scope.password = angular.copy('admin');

      $scope.submit();

      $httpBackend.flush();

      expect(LoginCtrl.loggedIn).toBe(false);
      expect($scope.errorMessage).toBe('Unable to login with provided credentials.');
    });
});
