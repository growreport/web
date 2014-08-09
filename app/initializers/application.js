import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

var CustomAuthenticator = Base.extend({
  /*restore: function(properties) {
    console.log('restore');
    console.log(properties);
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(properties.auth_token)) {
        resolve(properties);
      } else {
        reject();
      }
    });
  },*/
	authenticate: function(credentials) { 
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
	}/*
  invalidate: function() {
  return Ember.RSVP.resolve();
  } */
});

var CustomAuthorizer = Base.extend({
 authorize: function (jqXHR, requestOptions) {
  console.log("ello");
  console.log(this.get('session'));
  if (this.get('session.isAuthenticated') && !Ember.isEmpty(this.get(session.auth_token))) {
    jqXHR.setRequestHeader('Authorization', 'HTTP_AUTHENTICATION: ' + this.get(session.auth_token));
  }
 }
});

export default {
 name: 'authentication',
 initialize: function(container, application) {
    container.register('authenticator:custom', CustomAuthenticator);

    container.register('authorizer:custom', CustomAuthorizer);
  }
};
