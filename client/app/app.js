'use strict';

angular.module('projectSectordeportivoApp', [
  'projectSectordeportivoApp.auth',
  'projectSectordeportivoApp.admin',
  'projectSectordeportivoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
