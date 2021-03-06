import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      settings : this.store.findAll('setting').then((settings) => settings.objectAt(0)),
      posts   : this.store.findAll('post')
    });
  }
});
