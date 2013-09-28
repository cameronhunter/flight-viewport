'use strict';

describeComponent('lib/viewport', function () {

  var S = {'max-width': 865};
  var M = {'min-width': 866, 'max-width': 1024};
  var L = {'min-width': 1025, 'max-width': 1600};
  var XL = {'min-width': 1601};

  beforeEach(function () {
    setupComponent({
      breakpoints: [S, M, L, XL]
    });
  });

  it('should be trigger a viewport update when the window resizes', function () {
    var eventSpy = spyOnEvent(document, 'viewport-update');

    this.component.trigger('viewport-resize', {width: 1000});

    expect(eventSpy).toHaveBeenTriggeredOn(document);
    expect(eventSpy.mostRecentCall.data).toEqual(M);

    this.component.trigger('viewport-resize', {width: 2000});

    expect(eventSpy).toHaveBeenTriggeredOn(document);
    expect(eventSpy.mostRecentCall.data).toEqual(XL);

    this.component.trigger('viewport-resize', {width: 500});

    expect(eventSpy).toHaveBeenTriggeredOn(document);
    expect(eventSpy.mostRecentCall.data).toEqual(S);

    this.component.trigger('viewport-resize', {width: 1500});

    expect(eventSpy).toHaveBeenTriggeredOn(document);
    expect(eventSpy.mostRecentCall.data).toEqual(L);
  });

  it('should not repeatedly trigger the viewport update', function() {
    var eventSpy = spyOnEvent(document, 'viewport-update');

    expect(eventSpy.callCount).toEqual(0);

    this.component.trigger('viewport-resize', {width: 1000});

    expect(eventSpy.callCount).toEqual(1);
    expect(eventSpy.mostRecentCall.data).toEqual(M);

    this.component.trigger('viewport-resize', {width: 1000});

    expect(eventSpy.callCount).toEqual(1);
  });

});
