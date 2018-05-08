import Controller from '@ember/controller';
import { computed } from '@ember/object';


export default Controller.extend({
    queryParams: ['category'],
    category: null,
    
    filteredJobs: computed('category', 'model', function() {
        let category = this.get('category');
        let jobs = this.get('model');
        
        if (category) {
          return jobs.filterBy('category', category);
        } else {
          return jobs
        }
      })
   
});
