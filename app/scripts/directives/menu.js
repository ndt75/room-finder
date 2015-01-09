'use strict';

/**
 * @ngdoc directive
 * @name roomFinderApp.directive:menu
 * @description
 * # menu
 */
angular.module('roomFinderApp')
  .directive('menu', ['$http', 'roomService', function ($http, roomService) {
    return {
      templateUrl: 'views/menu.html',
      restrict: 'EA',
      link: function postLink($scope) {
        $scope.findRooms = function() {
          //console.log('findRooms...', $scope);

          $http.get('http://api/rooms/get', {
            params: {
              date: new Date($scope.date).toLocaleDateString(),
              stime: $scope.startTime,
              etime: $scope.endTime
            }
          }).
          success(function(data, status, headers, config) {
            console.log('success', data, status, headers(), config);
          }).
          error(function(data, status, headers, config) {
            console.log('error', data, status, headers(), config);
                var data = roomService.getRemoteDataTest();
                var rooms = roomService.updateRooms(data);
                  $scope.rooms = rooms;
                  $scope.refresh();
                  //$scope.rooms = rooms;

          });
        };


      }
    };
  }]);
