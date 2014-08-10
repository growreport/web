import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(ApplicationRouteMixin, {
	setupController: function(controller, model) {
		console.log('yolo');
		console.log(this.get('session.auth_token'));
	},
  	actions: {
  		authenticateSession: function() {
  			console.log('yolosf');
  					console.log(this.get('session'));
  			this.get('session').authenticate('authenticator:custom', {});
  		}
 	 }
});