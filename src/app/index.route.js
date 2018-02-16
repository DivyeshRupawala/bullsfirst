(function() {
  'use strict';

  angular
    .module('bullsfirst')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('accountCtrl', {
        url: '/',
        templateUrl: 'app/account/account.html',
        controller: 'accountCtrl',
        controllerAs: 'accCtrl'
      }).state('trade', {
        url: '/trade',
        templateUrl: 'app/trade/trade.html',
        controller: 'tradeCtrl'        
      });

    $urlRouterProvider.otherwise('/');
  }

})();
