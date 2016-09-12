'use strict';

describe('Service: projectService', function() {

    // load the service's module
    beforeEach(module('firstAppApp'));

    // instantiate service
    var projectService,
        $httpBackend;

    beforeEach(inject(function(_projectService_, _$httpBackend_) {
        projectService = _projectService_;
        $httpBackend = _$httpBackend_;
    }));

    it('should get a list of projects', function() {
                        
    });

});
