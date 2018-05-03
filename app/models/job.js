import DS from 'ember-data';

export default DS.Model.extend({
    jobId: DS.attr('string'),
    clientId: DS.attr('string'),
    jobName: DS.attr('string'),
    jobDesc: DS.attr('string'),
    jobBudget: DS.attr('number'),
    bids: DS.hasMany('bid'),
    freelancers: DS.hasMany('freelancer'),
    dateCreated: DS.attr('date', { 
        defaultValue() { return new Date(); }
    })
});
