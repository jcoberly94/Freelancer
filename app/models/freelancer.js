import DS from 'ember-data';
import { computed } from '@ember/object'

export default DS.Model.extend({
    firebaseid: DS.attr('string'),
    email: DS.attr('string'),
    first: DS.attr('string'),
    last: DS.attr('string'),
    address: DS.attr('string'),
    address2: DS.attr('string'),
    city: DS.attr('string'),
    zip: DS.attr('string'),
    type: DS.attr('string'),
    //,
    fullName: computed('first', 'last', function() {
        return `${this.get('first')} ${this.get('last')}`
    })
});
