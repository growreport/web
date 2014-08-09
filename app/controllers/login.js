import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'authenticator:custom',
  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      this.get('session').authenticate(this.get('authenticator'), data).then(function() {
      console.log("success");
    }, function(error) {
     console.log("error");
     console.log(error);
    });
    }
  }
});