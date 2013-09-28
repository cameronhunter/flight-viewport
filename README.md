# flight-viewport [![Build Status](https://secure.travis-ci.org/cameronhunter/flight-viewport.png)](http://travis-ci.org/cameronhunter/flight-viewport)

A [Flight](https://github.com/flightjs/flight) component for responsive
breakpoints. When the window is resized it triggers a `viewport-update` event
with the matched breakpoint.

## Installation

```bash
bower install --save flight-viewport
```

## Example

```javascript
define(['flight-viewport'], function(Viewport) {

  Viewport.attachTo(document, {
    breakpoints: [
      {'max-width': 865},
      {'min-width': 866, 'max-width': 1024},
      {'min-width': 1025, 'max-width': 1600},
      {'min-width': 1601}
    ]
  });

  // Listen for viewport updates
  $(document).on('viewport-update', function(e, breakpoint) {
    console.log(e, breakpoint);
  });
});
```

## Development

Development of this component requires [Bower](http://bower.io), and preferably
[Karma](http://karma-runner.github.io) to be globally installed:

```bash
npm install -g bower karma
```

Then install the Node.js and client-side dependencies by running the following
commands in the repo's root directory.

```bash
npm install
bower install
```

To continuously run the tests in Chrome and Firefox during development, just run:

```bash
karma start
```

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
