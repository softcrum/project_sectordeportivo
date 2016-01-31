'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AboutPhilosophy', {
        controller: 'AboutPhilosophyCtrl',
        templateUrl: 'app/about/philosophy/philosophy.html',
        url: '/about/philosophy'
      });
  });
