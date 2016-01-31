'use strict';

describe('Controller: AboutVersionCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectordeportivoApp'));

  var AboutVersionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutVersionCtrl = $controller('AboutVersionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
