import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('name'),
  operation: DS.belongsTo('operation'),
  crops: DS.hasMany('crop'),
  sensors: DS.hasMany('sensor')
});
