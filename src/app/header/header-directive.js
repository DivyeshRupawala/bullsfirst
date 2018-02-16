(function() {
  'use strict';

  angular
    .module('bullsfirst')
    .directive('headerDirective', function () { 
    	return {
	    	restrict: 'E',        
        scope: false,
	      templateUrl: 'app/header/header-directive.html',
	      link: function($scope, $element, $attr) { 

	      }
	    }
    });  

})();
