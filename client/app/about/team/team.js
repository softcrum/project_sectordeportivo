'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AboutTeam', {
        controller: 'AboutTeamCtrl',
        templateUrl: 'app/about/team/team.html',
        url: '/about/team'
      });
  });
