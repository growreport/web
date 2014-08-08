import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  stage: DS.attr('string'),
  sensors: DS.hasMany('sensors'),
  crop: DS.belongsTo('crop'),
  strain: DS.belongsTo('strain')
});
