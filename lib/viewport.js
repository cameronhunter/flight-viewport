define(function (require) {

  'use strict';

  var utils = require('flight/lib/utils');
  var defineComponent = require('flight/lib/component');

  return defineComponent(viewport);

  function viewport() {
    var minWidth = 'min-width';
    var maxWidth = 'max-width';

    this.defaultAttrs({
      breakpoints: [
        {'name': 'v1', 'max-width': 865},
        {'name': 'v2', 'min-width': 866, 'max-width': 1024},
        {'name': 'v3', 'min-width': 1025, 'max-width': 1600},
        {'name': 'v4', 'min-width': 1601}
      ]
    });

    this.onResize = function(_, viewport) {
      var breakpoint = this.findBreakpointFor(viewport);
      if (this.hasChanged(breakpoint)) {
        this.breakpoint = breakpoint;
        this.trigger('viewport-update', breakpoint);
      }
    };

    this.hasChanged = function(breakpoint) {
      return breakpoint[minWidth] !== this.breakpoint[minWidth] ||
             breakpoint[maxWidth] !== this.breakpoint[maxWidth];
    };

    this.findBreakpointFor = function(viewport) {
      var breakpoints = (this.attr.breakpoints || []);
      var matchingBreakpoints = breakpoints.filter(function(breakpoint) {
        return viewport.width >= (breakpoint[minWidth] || 0) &&
               viewport.width <= (breakpoint[maxWidth] || 0)
      });

      return matchingBreakpoints[0];
    };

    this.viewport = function() {
      return {width: this.$window.width()};
    };

    this.after('initialize', function () {
      this.breakpoint = {};
      this.$window = $(window);

      this.on('uiWindowResize', this.onResize);

      this.on(window, 'resize', utils.throttle(function() {
        this.trigger('uiWindowResize', this.viewport());
      }.bind(this)));

      this.trigger('uiWindowResize', this.viewport());
    });
  }

});
