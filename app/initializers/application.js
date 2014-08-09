import Authenticator from '../authenticators/authenticator-custom';
import Authorizer    from '../authorizers/authorizer-custom';
import Ember from 'ember';

export default {
 name: 'authentication',
 before: 'simple-auth',
 authorizerFactory: 'authorizer:custom',
 initialize: function(container, application) {
    container.register('authenticator:custom', Authenticator);
    container.register('authorizer:custom', Authorizer);
  }
};
