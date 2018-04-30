import Controller from '@ember/controller';
import { inject } from '@ember/service'

export default Controller.extend({
    type: 'freelancer',
    firebaseApp: inject(),
    actions: {
        
        signUp(first, last, email, password, address, address2, city, zip, accountType) {
            const auth = this.get('firebaseApp').auth();
            auth.createUserWithEmailAndPassword(email, password).then((userResponse) => {
                if (this.type == 'freelancer') {
                    const user = this.store.createRecord('freelancer', {
                    firebaseid: userResponse.uid,
                    email: userResponse.email,
                    first: this.first,
                    last: this.last,
                    address: this.address,
                    address2: this.address2,
                    city: this.city,
                    zip: this.zip,
                    type: 'freelancer'
                });
                    return user.save();
                } else {
                    const user = this.store.createRecord('client', {
                        firebaseid: userResponse.uid,
                        email: userResponse.email,
                        first: this.first,
                        last: this.last,
                        address: this.address,
                        address2: this.address2,
                        city: this.city,
                        zip: this.zip,
                        type: 'client'
                    });
                  return user.save();
                }
              //this.transitionTo('login')
            });
          },
          radioChange(value) {
            this.set('type', value)
          }
    }
});
