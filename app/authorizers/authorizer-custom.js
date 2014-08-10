import Base from 'simple-auth/authorizers/base';
import Ember from 'ember';


export default Base.extend({
 authorize: function (jqXHR, requestOptions) {
  console.log("ello");
  console.log(this.get('session'));
  if (this.get('session.isAuthenticated') && !Ember.isEmpty(this.get('session.auth_token'))) {
    jqXHR.setRequestHeader('Authorization', 'HTTP_AUTHENTICATION: ' + this.get('session.auth_token'));
  }
 }
});
