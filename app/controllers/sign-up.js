import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { observer } from '@ember/object';
import { match } from '@ember/object/computed';

export default Controller.extend({
    isDisabled: true,
    type: '',
    firebaseApp: inject(),
    actions: {
        signUp(first, last, email, password, address, address2, city, zip) {
            const auth = this.get('firebaseApp').auth();
            auth.createUserWithEmailAndPassword(email, password).then((userResponse) => {
                if (this.type == 'freelancer') {
                    const user = this.store.createRecord('user', {
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
                    const user = this.store.createRecord('user', {
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
              
            });
            this.transitionToRoute('login');
          },
          radioChange(value) {
            this.set('type', value);
          }
    },

    isEmailValid: match('email', /^.+@.+\..+$/),
    isPasswordValid: false,
    shouldFlagPassword: false,
    shouldFlagEmail: false,
    fieldsUpdated: observer('first', 'last', 'email', 'password', 'address',
                            'city', 'zip', 'type', function(){

        // Observes as fields are updated, if all of the fields have some value,
        //  turns on the button. Checks that email is valid as well
        if(!this.first || !this.last || !this.email || !this.password ||
            !this.address || !this.city || !this.zip || !this.type) {
            this.set('isDisabled', true);

        } else {
            // Need valid email and password
            if (this.password.length >= 6) {
                this.set('isPasswordValid', true);
            } else {
                this.set('isPasswordValid', false);
            }
            // Check password validity
            if(this.isPasswordValid) {
                this.set('shouldFlagPassword', false);

                document.getElementById("stupidPassword").style.borderWidth = "1px";
                document.getElementById("stupidPassword").style.borderColor = "lightgray";
            }  else {
                this.set('shouldFlagPassword', true);
            }

            // Flag password field
            if(this.shouldFlagPassword) {
                document.getElementById("stupidPassword").style.borderWidth = "5px";
                document.getElementById("stupidPassword").style.borderColor = "red";
            }

            // Check email validitiy
            if (this.isEmailValid) {
                this.set('shouldFlagEmail', false);

                document.getElementById("stupidEmail").style.borderWidth = "1px";
                document.getElementById("stupidEmail").style.borderColor = "lightgray";
            } else {
                this.set('shouldFlagEmail', true);
            }
            
            // Flag email field
            if(this.shouldFlagEmail){
                document.getElementById("stupidEmail").style.borderWidth = "5px";
                document.getElementById("stupidEmail").style.borderColor = "red";
            }

            if(this.isEmailValid && this.isPasswordValid) {
                this.set('isDisabled', false);
            } else {
                this.set('isDisabled', true);
            }

        }
    })
});