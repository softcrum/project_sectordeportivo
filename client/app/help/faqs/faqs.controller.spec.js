'use strict';

describe('Controller: HelpFaqsCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectordeportivoApp'));

  var HelpFaqsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelpFaqsCtrl = $controller('HelpFaqsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
