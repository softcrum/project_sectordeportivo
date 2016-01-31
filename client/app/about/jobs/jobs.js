'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AboutJobs', {
        controller: 'AboutJobsCtrl',
        templateUrl: 'app/about/jobs/jobs.html',
        url: '/about/jobs'
      });
  });
