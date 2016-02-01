'use strict';

describe('Controller: LegalCookiesCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectordeportivoApp'));

  var LegalCookiesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LegalCookiesCtrl = $controller('LegalCookiesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
