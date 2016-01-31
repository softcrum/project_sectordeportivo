'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AboutContactUs', {
        controller: 'AboutContactUsCtrl',
        templateUrl: 'app/about/contact_us/contact_us.html',
        url: '/about/contact_us'
      });
  });
