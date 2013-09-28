define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(app);

  function app() {
    this.update = function(_, data) {
      this.$node.text(JSON.stringify(data));
    };

    this.after('initialize', function () {
      this.on(document, 'viewport-update', this.update);
    });
  }

});
