import Base from 'simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({
  restore: function(properties) {
    console.log('restore');
    console.log(properties);
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(properties.auth_token)) {
        resolve(properties);
      } else {
        reject();
      }
    });
  },
	authenticate: function(credentials) { 
    var _this = this;
    Ember.$.ajaxSetup({
      headers: { 'Authorization': 'Bearer ' + _this.get('session.auth_token') }
    });
		return new Ember.RSVP.Promise(function (resolve, reject) {
            // make the request to authenticate the user at endpoint /v3/token
            Ember.$.ajax({
              url:  'http://localhost:3000/login',
              type: 'POST',
              data: { session: { email: credentials.identification, password: credentials.password } }
            }).then(function(response) {
              Ember.run(function() {
                // resolve (including the account id) as the AJAX request was successful; all properties this promise resolves
                // with will be available through the session
                resolve({ auth_token: response.auth_token});
              });
            }, function(xhr, status, error) {
              Ember.run(function() {
                reject(xhr.responseText);
              });
            });
		});
	},
  invalidate: function() {
  return Ember.RSVP.resolve();
  } 
});
