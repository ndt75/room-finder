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
        $scope.refresh = function(){
            $scope.rooms = roomService.getRooms("San Jose");
        };

        $scope.refresh();

    });
