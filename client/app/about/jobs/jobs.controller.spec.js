'use strict';

describe('Controller: AboutJobsCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectordeportivoApp'));

  var AboutJobsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutJobsCtrl = $controller('AboutJobsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
