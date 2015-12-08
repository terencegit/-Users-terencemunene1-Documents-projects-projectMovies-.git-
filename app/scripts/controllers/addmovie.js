'use strict';

/**
 * @ngdoc function
 * @name kenDocsApp.controller:AddmovieCtrl
 * @description
 * # AddmovieCtrl
 * Controller of the kenDocsApp
 */
angular.module('kenDocsApp')
    .controller('AddmovieCtrl', function($scope, myFactory) {
    	$scope.movie = new myFactory();
        $scope.saveMovie = function() {
            //Create a new resource using your 'movie' object
            
            console.log($scope.movie);
            //This will pass a post to the API
                alert("Record Saved!!");
            $scope.movie.$save(function() {
            });
        };

    });
