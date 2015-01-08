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

        $scope.refresh = function(){
            $scope.rooms = roomService.getRooms("San Jose");
        };

        $scope.refresh();

    });
