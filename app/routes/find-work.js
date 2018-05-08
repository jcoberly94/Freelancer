import Route from '@ember/routing/route';

export default Route.extend({
    
    model() {
        return this.store.findAll('job').then(results => results.sortBy('dateCreated').reverse());
      }
});
