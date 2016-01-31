'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AboutCulture', {
        controller: 'AboutCultureCtrl',
        templateUrl: 'app/about/culture/culture.html',
        url: '/about/culture'
      });
  });
