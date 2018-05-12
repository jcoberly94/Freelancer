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
    jobs: DS.hasMany('job', { async: true, inverse: null }),
    bids: DS.hasMany('bid', { async: true, inverse: null }),
    totalSpent: DS.attr('number', { defaultValue: 0 }),
    fullName: computed('first', 'last', function() {
        return `${this.get('first')} ${this.get('last')}`
    })
});
