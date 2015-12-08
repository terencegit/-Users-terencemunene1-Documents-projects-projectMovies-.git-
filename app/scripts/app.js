'use strict';

/**
 * @ngdoc overview
 * @name kenDocsApp
 * @description
 * # kenDocsApp
 *
 * Main module of the application.
 */
angular
  .module('kenDocsApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/viewMovie/:_id', {
        templateUrl: 'views/viewmovie.html',
        controller: 'ViewmovieCtrl',
        controllerAs: 'viewMovie'
      })
      .when('/addMovie', {
        templateUrl: 'views/addmovie.html',
        controller: 'AddmovieCtrl',
        controllerAs: 'addMovie'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
