define(function (require) {

  'use strict';

  var utils = require('flight/lib/utils');
  var defineComponent = require('flight/lib/component');

  return defineComponent(viewport);

  function viewport() {
    var minWidth = 'min-width';
    var maxWidth = 'max-width';
    var viewportResize = 'viewport-resize';

    this.defaultAttrs({
      breakpoints: []
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
      var matchingBreakpoints = this.attr.breakpoints.filter(function(breakpoint) {
        var largerThanMin = breakpoint[minWidth] ? viewport.width >= breakpoint[minWidth] : true;
        var smallerThanMax = breakpoint[maxWidth] ? viewport.width <= breakpoint[maxWidth] : true;
        return largerThanMin && smallerThanMax;
      });

      return matchingBreakpoints[0];
    };

    this.viewport = function() {
      return {width: this.$window.width()};
    };

    this.after('initialize', function () {
      this.breakpoint = {};
      this.$window = $(window);

      this.on(viewportResize, this.onResize);

      this.on(window, 'resize', utils.debounce(function() {
        this.trigger(viewportResize, this.viewport());
      }.bind(this)));

      this.trigger(viewportResize, this.viewport());
    });
  }

});
