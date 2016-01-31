'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AboutPress', {
        controller: 'AboutPressCtrl',
        templateUrl: 'app/about/press/press.html',
        url: '/aboutpress'
      });
  });
