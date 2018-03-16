// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic-search-bar', 'ionic.closePopup', 'starter.controllers', 'starter.services', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      if (ionic.Platform.isAndroid()) {
        StatusBar.backgroundColorByHexString("#ccc");
        //StatusBar.styleDefault();
        //StatusBar.overlaysWebView(true);
      } else {
        StatusBar.styleDefault();
      }
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $compileProvider) {

  $compileProvider.imgSrcSanitizationWhitelist('img/'); // necessario para imagens
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|img):/);
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel):/);

  /* Platform related config */
  $ionicConfigProvider.scrolling.jsScrolling(true);
  $ionicConfigProvider.tabs.style('standard');
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.navBar.positionPrimaryButtons('right');
  $ionicConfigProvider.views.swipeBackEnabled(true);
  //$ionicConfigProvider.backButton.icon();
  $ionicConfigProvider.backButton.text(false);
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.form.toggle('small');
  //$ionicConfigProvider.form.checkbox('');
  $ionicConfigProvider.spinner.icon('spiral');



  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: "templates/tabs-ios.html"
    /*templateUrl: function() {
        if (ionic.Platform.isAndroid()) {
            return  "templates/tabs-android.html";
        }
        return "templates/tabs-ios.html";
    }*/
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.dash-evento', {
      url: '/dash/:eventoId',
      cacheView: false,
      views: {
        'tab-dash': {
          templateUrl: 'templates/evento.html',
          /*controller: 'EventoCtrl'*/
        }
      }
    })

  .state('tab.categorias', {
      url: '/categorias',
      views: {
        'tab-categorias': {
          templateUrl: 'templates/tab-categorias.html',
          controller: 'CategoriasCtrl'
        }
      }
    })
    .state('tab.categoria-detail', {
      url: '/categorias/:categoriaId',
      cacheView: false,
      views: {
        'tab-categorias': {
          templateUrl: 'templates/categoria-detail.html',
          controller: 'EstabelecimentosCtrl'
        }
      }
    })

  .state('tab.trend', {
    url: '/trend',
    views: {
      'tab-trend': {
        templateUrl: 'templates/tab-trend.html',
        controller: 'EstabelecimentosCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});