'use strict';

describe('Controller: HelpIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectordeportivoApp'));

  var HelpIndexCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelpIndexCtrl = $controller('HelpIndexCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
