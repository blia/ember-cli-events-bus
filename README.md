# Events-bus

Simple global events service.

Adds Ember Evented Service to your routs, controllers and components

Service known as `eventsBus` and `globalEvents`

## Installation

`ember install ember-cli-events-bus`

## Usage

my-component.js
```
  ...
  actions: {
    save() {
      ...
      this.globalEvents.trigger('foo:bar', data)
      ...
    }
  }
  ...
```

my-controller.js
```
  ...
  init() {
    ...
    this.globalEvents.on('foo:bar', this, 'bar')
    ...
  },
  bar(data) {
    ...
  }
  ...
```
