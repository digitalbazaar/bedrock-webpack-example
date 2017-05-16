var angular = require('angular');
require('angular-route');
require('jquery');
require('bootstrap');
require('bedrock-angular-alert');
require('../less/app.less');

var module = angular.module('foo', ['bedrock.alert', 'ngRoute']);

require('./example-component')(module);

module.config(function($provide, $routeProvider) {
  $routeProvider.when('/', {
    template: '<ex-webpack></ex-webpack>'
  });

  // FIXME: this is only here because brAlertService and brModelService use
  // this deprecated stuff
  $provide.decorator('$rootScope', function($delegate) {
    $delegate.app = $delegate.app || {};
    $delegate.app.services = $delegate.app.services || {};
    return $delegate;
  });
});
