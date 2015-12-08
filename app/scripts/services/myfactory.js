'use strict';

/**
 * @ngdoc service
 * @name kenDocsApp.myFactory
 * @description
 * # myFactory
 * Factory in the kenDocsApp.
 */
angular.module('kenDocsApp')
  .factory('myFactory', function ($resource) {
return $resource("http://127.0.0.1:8081/movies/:_id");

  });
