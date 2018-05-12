import DS from 'ember-data';

export default DS.Model.extend({
    firebaseid: DS.attr('string'),
    jobID: DS.attr('string'),
    bidAmount: DS.attr('number'),
    freelancerID: DS.attr('string'),
    job: DS.belongsTo('job', { async: true, inverse: null }),
    dateCreated: DS.attr('date', { 
        defaultValue() { return new Date(); }
    })

});
