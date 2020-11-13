'use strict';

angular.module('insight.api')
  .factory('Api',
    function() {
      return {
        apiPrefix: '/rhombus-insight-api'
      }
    });
