import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GrowReportENV.locationType
});

Router.map(function() {
  this.route('login');
  this.route('sensors');
  this.resource('operations', function() {
    this.route('show', {path: ':operation_id'});
  });
});

export default Router;
