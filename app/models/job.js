import DS from 'ember-data';

export default DS.Model.extend({
    jobId: DS.attr('string'),
    clientEmail: DS.attr('string'),
    jobName: DS.attr('string'),
    jobDesc: DS.attr('string'),
    jobBudget: DS.attr('number'),
    category: DS.attr('string'),
    bids: DS.hasMany('bid'),
    freelancers: DS.hasMany('freelancer'),
    dateCreated: DS.attr('date', { 
        defaultValue() { return new Date(); }
    })
});
