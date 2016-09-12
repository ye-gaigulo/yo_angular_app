'use strict';

describe('Service: httpHelper', function() {

    // load the service's module
    beforeEach(module('firstAppApp'));

    // instantiate service
    var httpHelper,
        $httpBackend,
        url = 'http://projectservice.staging.tangentmicroservices.com/api/v1/projects/',
        data = {
            'pk': '',
            'model': {}
        };

    beforeEach(inject(function(_httpHelper_, _$httpBackend_) {
        httpHelper = _httpHelper_;
        $httpBackend = _$httpBackend_;
    }));

    it('should get a list of projects', function() {
        $httpBackend.expectGET('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/')
            .respond([{
                'pk': 3,
                'title': 'Stark Industries CRM',
                'description': 'Helping iron man keep track of his customers',
                'start_date': '2015-02-18',
                'end_date': null,
                'is_billable': true,
                'is_active': true,
                'task_set': [],
                'resource_set': []
            }]);

    });

});
