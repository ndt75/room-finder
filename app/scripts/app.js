'use strict';

/**
 * @ngdoc overview
 * @name roomFinderApp
 * @description
 * # roomFinderApp
 *
 * Main module of the application.
 */
angular
  .module('roomFinderApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/sj7.html',
        controller: 'SJ7Ctrl'
      })
      .when('/sj8', {
        templateUrl: 'views/sj8.html',
        controller: 'SJ8Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .controller('RoomFinderController', ['$scope', function($scope) {
      $scope.locationSelected = '';
      console.log('locationSelected', $scope.locationSelected);
    }]);
