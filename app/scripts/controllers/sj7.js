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
        $scope.refresh = function(){
            $scope.rooms = roomService.getRooms("San Jose");
        };

        $scope.refresh();
    });
