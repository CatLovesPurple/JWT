'use strict';

/**
 * @ngdoc function
 * @name jwtnodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jwtnodeApp
 */
angular.module('jwtnodeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
