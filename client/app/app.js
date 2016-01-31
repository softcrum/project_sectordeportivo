'use strict';

angular.module('projectSectordeportivoApp', [
    'projectSectordeportivoApp.auth',
    'projectSectordeportivoApp.admin',
    'projectSectordeportivoApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngMaterial',
    'pascalprecht.translate',
    'btford.socket-io',
    'ui.router',
    'validation.match'
  ])
  .config(function($cookiesProvider, $locationProvider, $translateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
    $translateProvider.useStaticFilesLoader({
      prefix: 'languages/',
      suffix: '.json'
    });
    $translateProvider.useSanitizeValueStrategy();
  })
  .controller('AppCtrl', function ($scope, $translate, $cookies) {
    $scope.app = {
      company: {
        address: {
          format: 'Avenida Perú 0895, La Cisterna, Santiago, Chile',
          point: 'https://www.google.cl/maps/place/Per%C3%BA+895,+La+Cisterna,+Regi%C3%B3n+Metropolitana,+Chile/@-33.5386653,-70.6808564,17z/data=!3m1!4b1!4m2!3m1!1s0x9662dba9acbe1ad7:0x3e086002dae54d6d'
        },
        email: {
          contact: 'contact@sectordeportivo.com'
        },
        phone: {
          call: '+56942329319',
          format: '(+56 9) 4232 9319'
        }
      },
      settings: {
        name: 'SectorDeportivo',
        url: 'http://www.sectordeportivo'
      }
    };
    $scope.appChangeLanguage = function (key) {
      $translate.use(key);
      $cookies.put('SC_SD-language', key);
    };
  })
  .run(function($cookies, $translate) {
    var defaultLanguage = $cookies.get('SC_SD-language');
    if (defaultLanguage) {
      $translate.use(defaultLanguage);
    } else {
      $translate.use('es');
    }
  });
