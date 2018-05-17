import Controller from '@ember/controller';
import { inject } from '@ember/service';



export default Controller.extend({
    category: 'other',
    firebaseApp: inject('session'),
    client: '',
    beforeModel: function() {
        return this.get('session').fetch().catch(function() {});
      },
    
    actions: {
        postJob(name, description, budget, category) {



            const job = this.store.createRecord('job', {
                clientEmail: this.get('session.currentUser.email'),
                jobName: this.name,
                jobDesc: this.description,
                jobBudget: this.budget,
                category: this.category
            });

            this.get('store').query('user', {
                orderBy: 'email', 
                equalTo: this.get('session.currentUser.email')
            
            }).then(function(data) {
                let client = data.get('firstObject')
                client.get('jobs').addObject(job)
                job.save()   
            })
            this.transitionToRoute('find-work')
            
            
          },
          radioChange(value) {
            this.set('category', value)
          }
          
    }
});
