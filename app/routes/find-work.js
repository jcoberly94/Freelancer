import Route from '@ember/routing/route';

export default Route.extend({
    //queryParams:{category: {refreshModel:true}},
    
    model() {
        
        return this.store.findAll('job').then(results => results.sortBy('dateCreated').reverse());
      }
});
