'use strict';

/**
 * @ngdoc function
 * @name roomFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the roomFinderApp
 */
angular.module('roomFinderApp')
  .controller('SJ7Ctrl', function ($scope, roomService) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      $scope.rooms = roomService.getRooms('San Jose');

      $scope.hasAttribute = function (value) {
        return (value) ? 'yes' : 'no';
      }
  });
