(function() {
  'use strict';

  angular
    .module('bullsfirst')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
