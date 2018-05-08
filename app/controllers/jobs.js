import Controller from '@ember/controller';
import { computed } from '@ember/object';


export default Controller.extend({
    queryParams: ['id'],
    id: null,
    
    jobID: computed('id', 'model', function() {
        let id = this.get('id');
        let jobs = this.get('model');
        
        if (id) {
          return jobs.filterBy('id', id);
        } else {
          return jobs
        }
      })
});
