'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'shoppinpal.mobile-menu',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/calender', {templateUrl: 'partials/calendar.html', controller: 'MyCtrl1'});
  $routeProvider.when('/stats', {templateUrl: 'partials/stats.html', controller: 'MyCtrl1'});

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
