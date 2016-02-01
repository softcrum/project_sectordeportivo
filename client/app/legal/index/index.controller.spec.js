'use strict';

describe('Controller: LegalIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectordeportivoApp'));

  var LegalIndexCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LegalIndexCtrl = $controller('LegalIndexCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
