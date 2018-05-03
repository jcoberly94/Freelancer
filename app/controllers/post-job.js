import Controller from '@ember/controller';
import { inject } from '@ember/service';



export default Controller.extend({
    category: 'other',
    firebaseApp: inject('session'),
    beforeModel: function() {
        return this.get('session').fetch().catch(function() {});
      },
   
    actions: {
        postJob(name, description, budget, category, user) {
            user = this.get('session.currentUser.email')
            console.log(`name: ${name}, description: ${description}, budget: ${budget}, user: ${user}`)

            const job = this.store.createRecord('job', {
                clientEmail: this.get('session.currentUser.email'),
                jobName: this.name,
                jobDesc: this.description,
                jobBudget: this.budget,
                category: this.category
                });
            job.save() 
                
            
       
            //this.transitionTo('index')
          },
          radioChange(value) {
            this.set('category', value)
          }
    }
});
