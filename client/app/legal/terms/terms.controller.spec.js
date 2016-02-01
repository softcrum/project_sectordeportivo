'use strict';

describe('Controller: LegalTermsCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectordeportivoApp'));

  var LegalTermsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LegalTermsCtrl = $controller('LegalTermsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
