import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GrowlogWebENV.locationType
});

Router.map(function() {
  this.route('login');
  this.route('sensors');
});

export default Router;
