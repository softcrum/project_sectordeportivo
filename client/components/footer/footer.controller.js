'use strict';

class FooterController {

  constructor() {
    this.date = new Date().getFullYear();
  }

}

angular.module('projectSectordeportivoApp')
  .controller('FooterController', FooterController);
