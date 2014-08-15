import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GrowReportENV.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('sensors');
  this.resource('operations', function() {
    this.route('show', {path: ':operation_id'});
    this.route('add');
  });
  this.resource('error', { path: 'errors/:error_id' });
});

export default Router;
