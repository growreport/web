import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(ApplicationRouteMixin, {
  	actions: {
  		authenticateSession: function() {
  			this.get('session').authenticate('authenticator:custom', {});
  		}
 	 }
});