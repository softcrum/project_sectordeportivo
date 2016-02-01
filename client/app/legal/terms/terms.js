'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('LegalTerms', {
        controller: 'LegalTermsCtrl',
        templateUrl: 'app/legal/terms/terms.html',
        url: '/legal/terms'
      });
  });
