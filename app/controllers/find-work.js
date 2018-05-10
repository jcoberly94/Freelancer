import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { filter } from '@ember/object/computed';


export default Controller.extend({
    queryParams: ['category', 'query'],
    query: null,
    category: null,
    searching_for: null,
    
    filteredJobs: computed('category', 'query', 'model', function() {
        let query = this.get('query');
        let category = this.get('category');
        let jobs = this.get('model');
        let categories = ['c', 'mobile', 'javascript', 'java', 'web_design', 'web', 'other']


        // Searched for a category
        // Return the jobs with that category
        if(categories.includes(query)) {
          this.set('searching_for', query);
          return jobs.filterBy('category', query);
        }
        
        let filtered = [];

        if (category && !query){
          this.set('searching_for', category);

          // Handles clicking a category link on the side
          // Whenever a category is clicked, query is null
          // Returns jobs with that category
          return jobs.filterBy('category', category)
        } else if (query) {
          this.set('searching_for', query);

          query = query.toLowerCase();
          jobs.forEach(element => {
            // iOS and Android keywords trigger mobile category
            if (query == 'ios' || query == 'android'){
              if(element.category == 'mobile') {
                filtered.push(element);
                return;
              }
            }

            // Query exists within the job name
            if (element.jobName.toLowerCase().includes(query)) {
              filtered.push(element);
              return;
            }
            
            // Query exists within the job description
            if (element.jobDesc.toLowerCase().includes(query)) {
              filtered.push(element)
              return;
            }
          });
        } else {
          this.set('searching_for', null);
          return jobs;
        }
        
        return filtered;
      })
      
});
