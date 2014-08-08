import DS from "ember-data";

export default DS.Model.extend({
 	data: DS.attr('string'),
 	created_at: DS.attr('string')
});
