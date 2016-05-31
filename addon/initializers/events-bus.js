export function initialize(application) {
  application.inject('route', 'eventsBus', 'service:events-bus');
  application.inject('route', 'globalEvents', 'service:events-bus');
  application.inject('component', 'eventsBus', 'service:events-bus');
  application.inject('component', 'globalEvents', 'service:events-bus');
  application.inject('controller', 'eventsBus', 'service:events-bus');
  application.inject('controller', 'globalEvents', 'service:events-bus');
}

export default {
  name: 'events-bus',
  initialize: initialize
};
