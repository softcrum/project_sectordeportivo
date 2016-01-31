'use strict';

describe('Controller: AboutCultureCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectordeportivoApp'));

  var AboutCultureCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCultureCtrl = $controller('AboutCultureCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
