'use strict';

angular.module('projectSectordeportivoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('HelpFaqs', {
        controller: 'HelpFaqsCtrl',
        templateUrl: 'app/help/faqs/faqs.html',
        url: '/help/faqs'
      });
  });
