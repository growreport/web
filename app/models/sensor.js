import DS from "ember-data";

export default DS.Model.extend({
 	type: DS.attr('string'),
 	readings: DS.hasMany('reading'),
  	user: DS.belongsTo('user')
});
