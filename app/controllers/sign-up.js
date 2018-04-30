import Controller from '@ember/controller';
import { inject } from '@ember/service'

export default Controller.extend({

    firebaseApp: inject(),
    actions: {
        signUp(first, last, email, password, address, address2, city, zip) {
            console.log(password)
            const auth = this.get('firebaseApp').auth();
            auth.createUserWithEmailAndPassword(email, password).then((userResponse) => {
              const user = this.store.createRecord('freelancer', {
                firebaseid: userResponse.uid,
                email: userResponse.email,
                first: this.first,
                last: this.last,
                address: this.address,
                address2: this.address2,
                city: this.city,
                zip: this.zip

              });
              return user.save();
              this.transitionTo('login')
            });
            
          }
    }
});
