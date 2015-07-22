# Events-bus

Simple global events service.

Adds Ember Evented Service to your routs, controllers and components

Service known as `eventsBus` and `globalEvents`

## Installation

`ember install ember-cli-events-bus`

## Usage

my-component.js
```es6
  ...
  actions: {
    save() {
      ...
      this.globalEvents.trigger('foo:bar', data)
      // eq
      this.eventsBus.trigger('foo:bar', data)
      ...
    }
  }
  ...
```

my-controller.js
```es6
  ...
  init() {
    ...
    this.globalEvents.on('foo:bar', this, 'bar')
    // eq
    this.eventsBus.on('foo:bar', this, 'bar')
    ...
  },
  bar(data) {
    ...
  }
  ...
```
