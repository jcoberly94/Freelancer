import Controller from '@ember/controller';
import { inject } from '@ember/service';



export default Controller.extend({
    category: 'other',
    firebaseApp: inject('session'),
    beforeModel: function() {
        return this.get('session').fetch().catch(function() {});
      },
   
    actions: {
        postJob(name, description, budget, user) {
            
            const job = this.store.createRecord('job', {
                firebaseid: userResponse.uid,
                email: userResponse.email,
                projectName: this.name,
                description: this.description,
                budget: this.budget,
                category: this.category
                });
            job.save();
       
            this.transitionTo('index')
          },
          radioChange(value) {
            this.set('category', value)
          }
    }
});
