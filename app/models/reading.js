import DS from "ember-data";

export default DS.Model.extend({
 	data: DS.attr('float'),
 	sensor: DS.belongsTo('sensor')
});
