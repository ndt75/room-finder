'use strict';

/**
 * @ngdoc directive
 * @name roomFinderApp.directive:menu
 * @description
 * # menu
 */
angular.module('roomFinderApp')
  .directive('menu', function () {
    return {
      templateUrl: 'views/menu.html',
      restrict: 'EA',
      link: function postLink(scope, element) {
        scope = {};
        element = element;

      }
    };
  });
