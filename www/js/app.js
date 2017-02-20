angular.module('starter', ['ionic', 'starter.controllers', 'directives','services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    /*if(window.StatusBar) {
      StatusBar.styleDefault();
    }*/
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

  .state('welcome', {
    url: '/welcome',
    templateUrl: "views/welcome.html",
    controller: 'WelcomeCtrl'
  })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "views/sidemenu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "views/home.html",
        controller: 'HomeCtrl'
      }
    }
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');
})
