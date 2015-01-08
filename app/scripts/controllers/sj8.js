'use strict';

/**
 * @ngdoc function
 * @name roomFinderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the roomFinderApp
 */
angular.module('roomFinderApp')
    .controller('SJ8Ctrl', function ($scope, roomService) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.rooms = roomService.getRooms('San Jose');

        $scope.hasAttribute = function (value) {
            return (value) ? 'yes' : 'no';
        };
    });
