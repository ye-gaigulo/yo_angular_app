'use strict';

describe('Service: projectResource', function () {

  // load the service's module
  beforeEach(module('firstAppApp'));

  // instantiate service
  var projectResource;
  beforeEach(inject(function (_projectResource_) {
    projectResource = _projectResource_;
  }));

  it('should do something', function () {
    expect(!!projectResource).toBe(true);
  });

});
