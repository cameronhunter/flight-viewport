define(function (require) {

  'use strict';

  var App = require('component/app');
  var Viewport = require('bower_components/flight-viewport/lib/viewport');

  return initialize;

  function initialize() {
    App.attachTo('.viewport');

    Viewport.attachTo(document, {
      breakpoints: [
        {"name": "S", "max-width": 865},
        {"name": "M", "min-width": 866, "max-width": 1024},
        {"name": "L", "min-width": 1025, "max-width": 1600},
        {"name": "XL", "min-width": 1601}
      ]
    });
  }

});
