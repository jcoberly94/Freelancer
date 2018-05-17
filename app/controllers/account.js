import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';


export default Controller.extend({
    
    id: null,
    firebaseApp: inject('session'),

      bids: computed('id', 'model.bids', function() {
        let id = this.get('model.bids.jobID');
        let bid = this.get('model.bids')
        return bid
      }),
      jobs: computed('model.jobs', function() {
          let id = this.get('id')
          let jobs = this.get('model.jobs')
          if (id) {
              return jobs.filterBy('id', id)
          } else {
              return jobs
          }
      }),
      users: computed('id', 'model.user', function () {
          let user = this.get('model.user')
          return user
      })
});