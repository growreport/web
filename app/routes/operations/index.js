import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
 		show: function () {
 			this.controller.set('showForm', true);
 		},
 		hide: function () {
 			this.controller.set('showForm', false);
 		}
 	}
});
