'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('LegalCookies', {
        controller: 'LegalCookiesCtrl',
        templateUrl: 'app/legal/cookies/cookies.html',
        url: '/legal/cookies'
      });
  });
