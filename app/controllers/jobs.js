import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';


export default Controller.extend({
    queryParams: ['id'],
    id: null,
    firebaseApp: inject('session'),
    
    jobID: computed('id', 'model.jobs', function() {
        let id = this.get('id');
        let jobs = this.get('model.jobs');
        
        if (id) {
          return jobs.filterBy('id', id);
        } else {
          return jobs
        }
      }),

      bidders: computed('id', 'model.bids', function() {
        let id = this.get('id')
        let bidders = this.get('model.bids')

        if (id) {
          return bidders.filterBy('jobID', id)
        }
      }),


      actions: {
        bidNow(bidAmount) {
          const bid = this.store.createRecord('bid', {
            jobID: this.get('id'),
            bidAmount: this.bidAmount,
            freelancerID: this.get('session.currentUser.email')
          })
          return bid.save()
          this.transitionToRoute('account')
          
        }
      }
});
