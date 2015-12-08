'use strict';

/**
 * @ngdoc function
 * @name kenDocsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kenDocsApp
 */
angular.module('kenDocsApp')
  .controller('MainCtrl', function ($scope, myFactory) {
 	//passes a get to your resource
 	$scope.movies = myFactory.query();
  });
