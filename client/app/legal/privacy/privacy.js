'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('LegalPrivacy', {
        controller: 'LegalPrivacyCtrl',
        templateUrl: 'app/legal/privacy/privacy.html',
        url: '/legal/privacy'
      });
  });
