'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AboutVersion', {
        controller: 'AboutVersionCtrl',
        templateUrl: 'app/about/version/version.html',
        url: '/about/version'
      });
  });
