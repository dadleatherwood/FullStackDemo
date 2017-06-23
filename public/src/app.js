angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/login')

  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: './src/views/login/login.html'
  })

  .state('inbox', {
    url:'/inbox',
    templateUrl: './src/views/inbox/inbox.html',
    controller: 'inboxCtrl'
  })

  .state('compose', {
    url: '/compose',
    templateUrl: './src/views/compose/compose.html',
    controller: 'composeCtrl'
  })

})
