'use strict';

describe('Controller: AboutContactUsCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectordeportivoApp'));

  var AboutContactUsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutContactUsCtrl = $controller('AboutContactUsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
