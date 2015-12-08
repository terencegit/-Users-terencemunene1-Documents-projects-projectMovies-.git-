'use strict';

/**
 * @ngdoc function
 * @name kenDocsApp.controller:ViewmovieCtrl
 * @description
 * # ViewmovieCtrl
 * Controller of the kenDocsApp
 */
angular.module('kenDocsApp')
  .controller('ViewmovieCtrl', function ($scope,$routeParams,myFactory) {
 		$scope.movie_id = $routeParams._id; 

 		 myFactory.get({ _id: $scope.movie_id}, function(response){
 			//here we pass a movie id & get a response - object
 			$scope.moviedetails = response;

 			});
  });
