import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        
        return this.store.findAll('job');
        //return this.get('job').findRecord('id', this.get('id'));
      }
});
