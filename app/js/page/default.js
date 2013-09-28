define(function (require) {

  'use strict';

  var App = require('component/app');
  var Viewport = require('bower_components/flight-viewport/lib/viewport');

  return initialize;

  function initialize() {
    App.attachTo('.viewport');

    Viewport.attachTo(document, {
      breakpoints: [
        {'name': 'v1', 'max-width': 865},
        {'name': 'v2', 'min-width': 866, 'max-width': 1024},
        {'name': 'v3', 'min-width': 1025, 'max-width': 1600},
        {'name': 'v4', 'min-width': 1601}
      ]
    });
  }

});
