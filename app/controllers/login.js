import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'authenticator:custom',
  message: '',
  actions: {
    authenticate: function() {
      var _this = this;
      console.log(this.get('session'));
      var data = this.getProperties('identification', 'password');
      this.get('session').authenticate(this.get('authenticator'), data).then(function() {
        _this.set('message', 'login successful');
      }, function(error) {
        _this.set('message',  JSON.parse(error).error);
      });
    }
  }
});