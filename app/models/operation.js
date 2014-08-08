import DS from 'ember-data';

var Operation = DS.Model.extend({
  name: DS.attr('string')
});

Operation.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "Complete Ember.js Tutorial",
        },
        {
            id: 2,
            name: "Checkout some more ember stuff",
        },
        {
            id: 3,
            name: "Solve world hunger (with Ember)",
        }
    ]
})

export default Operation