import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('name'),
  plants: DS.hasMany('plant')
});
