'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('HelpIndex', {
        controller: 'HelpIndexCtrl',
        templateUrl: 'app/help/index/index.html',
        url: '/help'
      });
  });
