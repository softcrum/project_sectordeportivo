'use strict';

angular.module('projectSectordeportivoApp.auth', [
  'projectSectordeportivoApp.constants',
  'projectSectordeportivoApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
