import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(ApplicationRouteMixin, {
	setupController: function(controller, model) {
		console.log('yolo');
		console.log(this.get('session'));
	},
  	actions: {
  		authenticateSession: function() {
  
  			this.get('session').authenticate('authenticator:custom', {});
  		}
 	 }
});