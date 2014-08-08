import DS from "ember-data";
import Ember from "ember";

export default Ember.Model.extend({
 	type: DS.attr('string'),
 	readings: DS.hasMany('reading')
});
