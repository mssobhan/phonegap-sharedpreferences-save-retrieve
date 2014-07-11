// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'controllers','services','ngCookies','nvd3ChartDirectives',])

.run(function($ionicPlatform,$ionicPopup) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
        StatusBar.styleDefault();
    }
  });


})

.run(function( $http, $cookies ){

    // For CSRF token compatibility with Django
    $http.defaults.headers.post['X-CSRFToken'] = $cookies['_xsrf'];
})

.config(function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
})

.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('app', {
      url: "/setup",
      views: {
        'menuContent' :{
          templateUrl: "templates/setup.html",
          controller: 'SetupCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/setup');
});


