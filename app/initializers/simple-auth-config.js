export default {
  name: 'simple-auth-config',
  before: 'simple-auth',
  initialize: function(container) {
    window.ENV = window.ENV || {};
    window.ENV['simple-auth'] = {
    	authorizer: "authorizer:custom"
    };
  }
};
