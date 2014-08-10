import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://localhost:3000',
  headers: { 'Authorization': 'blavlsaf ' + _this.get('session.auth_token') }
});
