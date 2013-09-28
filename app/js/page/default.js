define(function (require) {

  'use strict';

  var App = require('component/app');
  var Viewport = require('bower_components/flight-viewport/lib/viewport');

  return initialize;

  function initialize() {
    App.attachTo('.viewport');

    Viewport.attachTo(document, {
      breakpoints: [
        {'max-width': 865},
        {'min-width': 866, 'max-width': 1024},
        {'min-width': 1025, 'max-width': 1600},
        {'min-width': 1601}
      ]
    });
  }

});
