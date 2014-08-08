import Ember from "ember";
var SensorsRoute = Ember.Route.extend({
     model: function() {
         return this.store.find('sensor');
     }.property()
});
export default SensorsRoute;
