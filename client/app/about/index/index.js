'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AboutIndex', {
        controller: 'AboutIndexCtrl',
        templateUrl: 'app/about/index/index.html',
        url: '/about'
      });
  });
