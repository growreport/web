import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	authorizer: 'authorizer:custom',
	model: function() {
	var _this = this;
      return new Ember.RSVP.Promise(function(resolve, reject) {
 		Ember.$.get('http://localhost:3000/sensors').then(function(response) {
 			console.log('deep');
 			console.log(_this.get('session'));
              resolve(JSON.stringify(response));
            });
     	});
	}
});
