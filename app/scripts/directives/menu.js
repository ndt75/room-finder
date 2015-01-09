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
                $scope.setStartTime = function (time) {
                    $scope.startTime = time;
                }
                $scope.setEndTime = function (time) {
                    $scope.endTime = time;
                }

                $scope.setCapacity = function (min, max) {
                    $scope.minCapacity = min;
                    $scope.maxCapacity = max;
                }

                $scope.findRooms = function () {
                    //console.log('findRooms...', $scope);

                    $http.get('http://api/rooms/get', {
                        params: {
                            date: new Date($scope.date).toLocaleDateString(),
                            stime: $scope.startTime,
                            etime: $scope.endTime
                        }
                    }).
                        success(function (data, status, headers, config) {
                            console.log('success', data, status, headers(), config);
                        }).
                        error(function (data, status, headers, config) {
                            console.log('error', data, status, headers(), config);
                            var data = roomService.getRemoteDataTest();
                            var rooms = roomService.updateRooms(data);
                            $scope.rooms = rooms;
                            $scope.refresh();
                        });
                };

                /** Date Picker Functionality **/
                $scope.today = function () {
                    $scope.date = new Date().toLocaleDateString();
                };
                $scope.today();

                $scope.clear = function () {
                    $scope.date = null;
                };

                // Disable weekend selection
                $scope.disabled = function (date, mode) {
                    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
                };

                $scope.toggleMin = function () {
                    $scope.minDate = $scope.minDate ? null : new Date();
                };
                $scope.toggleMin();

                $scope.open = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();

                    $scope.opened = true;
                };

                $scope.dateOptions = {
                    formatYear: 'yy',
                    startingDay: 1
                };

                $scope.formats = ['dd-MMMM-yyyy', 'MM/dd/yyyy', 'dd.MM.yyyy', 'shortDate'];
                $scope.format = $scope.formats[1];
            }
        };
    }]);
