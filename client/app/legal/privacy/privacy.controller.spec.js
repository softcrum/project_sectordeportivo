'use strict';

describe('Controller: LegalPrivacyCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectordeportivoApp'));

  var LegalPrivacyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LegalPrivacyCtrl = $controller('LegalPrivacyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
