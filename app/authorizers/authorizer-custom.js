import Base from 'simple-auth/authorizers/base';
import Ember from 'ember';


export default Base.extend({
 authorize: function (jqXHR, requestOptions) {
 	console.log('authorizer call');
    var accessToken = this.get('session.auth_token');
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
      if (!isSecureUrl(requestOptions.url)) {
        Ember.Logger.warn('Credentials are transmitted via an insecure connection - use HTTPS to keep them secure.');
      }
      jqXHR.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    }
 }
});
