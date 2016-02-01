'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('LegalIndex', {
        controller: 'LegalIndexCtrl',
        templateUrl: 'app/legal/index/index.html',
        url: '/legal'
      });
  });
