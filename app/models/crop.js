import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  room: DS.belongsTo('room'),
  plants: DS.hasMany('plant')
});
