'use strict';

angular.module('projectSectordeportivoApp')
  .directive('footer', function () {
    return {
      controller: 'FooterController',
      controllerAs: 'footerCtrl',
      restrict: 'E',
      templateUrl: 'components/footer/footer.html'
    };
  });
