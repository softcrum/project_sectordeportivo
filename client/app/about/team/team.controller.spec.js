'use strict';

describe('Controller: AboutTeamCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectordeportivoApp'));

  var AboutTeamCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutTeamCtrl = $controller('AboutTeamCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
